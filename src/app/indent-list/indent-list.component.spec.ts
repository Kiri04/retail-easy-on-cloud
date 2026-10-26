import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppListViewComponent } from '../app-list-view/app-list-view.component';
import { IndentListComponent } from './indent-list.component';

describe('IndentListComponent', () => {
  let component: IndentListComponent;
  let fixture: ComponentFixture<IndentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndentListComponent, AppListViewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(IndentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('starts with three items in the table', () => {
    expect(component.items.length).toBe(3);
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('tbody tr').length).toBe(3);
    expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent)
      .toContain('Indent List');
  });

  it('adds a row when Add item is clicked', () => {
    const addButton = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    addButton.click();
    fixture.detectChanges();

    expect(component.items.length).toBe(4);
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('tbody tr').length).toBe(4);
    expect((fixture.nativeElement as HTMLElement).querySelector('tbody tr:last-child')?.textContent)
      .toContain('New item');
  });

  it('approves a pending item through the child table', () => {
    const approveButton = fixture.nativeElement.querySelector('tbody tr button') as HTMLButtonElement;
    approveButton.click();
    fixture.detectChanges();

    expect(component.items[0].status).toBe('Approved');
    expect((fixture.nativeElement as HTMLElement).querySelector('tbody tr')?.textContent)
      .toContain('Mark pending');
  });

  it('deletes a row through the child table', () => {
    const deleteButton = fixture.nativeElement.querySelectorAll('tbody tr button')[1] as HTMLButtonElement;
    deleteButton.click();
    fixture.detectChanges();

    expect(component.items.map(item => item.name)).toEqual(['Cooking oil', 'Sugar packets']);
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('tbody tr').length).toBe(2);
  });

  it('filters table rows after typing a search term', fakeAsync(() => {
    const screen = fixture.nativeElement as HTMLElement;
    const search = screen.querySelector('#indent-search') as HTMLInputElement;
    search.value = 'oil';
    search.dispatchEvent(new Event('input'));

    tick(300);
    fixture.detectChanges();

    expect(screen.querySelectorAll('tbody tr').length).toBe(1);
    expect(screen.querySelector('tbody tr')?.textContent).toContain('Cooking oil');
  }));
});
