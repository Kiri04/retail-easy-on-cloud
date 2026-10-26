import { Component, DestroyRef, inject,ChangeDetectionStrategy } from '@angular/core';
import { AppListViewComponent, IndentItem, TableAction } from '../app-list-view/app-list-view.component';
import { INDENT_LIST_METADATA } from './indent-list.metadata';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonApiService } from '../CommonAPI.Service';
// import { NgFor, NgForOf } from '../../../node_modules/@angular/common/index';

@Component({
  selector: 'app-indent-list',
  standalone: true,
  imports: [AppListViewComponent, FormsModule],
  templateUrl: './indent-list.component.html',
  styleUrl: './indent-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class IndentListComponent {
  constructor(private apiService: CommonApiService) {

  }
  private readonly destroyRef = inject(DestroyRef);
  metadata = INDENT_LIST_METADATA;
  items: IndentItem[] = [
    { id: 1, name: 'Rice bags', quantity: 10, status: 'Pending' },
    { id: 2, name: 'Cooking oil', quantity: 5, status: 'Approved' },
    { id: 3, name: 'Sugar packets', quantity: 20, status: 'Pending' }
  ];
  private nextId = 4;
  searchText = '';
  private searchTerm = '';
  private search$ = new BehaviorSubject<string>('');

  get filteredItems(): IndentItem[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.items;

    const visibleFields = this.metadata.fields.filter(field => field.visible);
    return this.items.filter(item => visibleFields.some(field =>
      String(item[field.fieldName as keyof IndentItem] ?? '').toLowerCase().includes(term)
    ));
  }

  addItem(): void {
    this.items = [
      ...this.items,
      { id: this.nextId++, name: 'New item', quantity: 1, status: 'Pending' }
    ];
  }

  onTableAction(action: TableAction): void {
    if (action.type === 'delete') {
      this.items = this.items.filter(item => item.id !== action.id);
      return;
    }

    this.items = this.items.map((item): IndentItem => item.id === action.id
      ? { ...item, status: item.status === 'Pending' ? 'Approved' : 'Pending' }
      : item);
  }

  onSearch(value: string): void {
    this.search$.next(value);
  }

  ngOnInit(): void {
    // this.search$
    // .pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   takeUntilDestroyed(this.destroyRef),
    //   switchMap((value) => {
    //     // You can perform any additional logic here if needed
    //     return [value]; // Return an observable with the value
    //   })
    // )
    // .subscribe(value => {
    //   this.searchTerm = value;
    // });

    this.apiService.get<IndentItem[]>('https://api.example.com/indents').subscribe({
      next:(data) =>   console.log(data),
      error:(data) =>  console.log(data)
    });
    // merge map example
    // this.search$
    // .pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   takeUntilDestroyed(this.destroyRef),
    //   mergeMap((value) => {
    //     return this.apiService.get<IndentItem[]>(`https://api.example.com/indents?search=${value}`);
    //   })
    // )
    // .subscribe(data => {
    //   console.log(data);
    // }); 
  }

}
