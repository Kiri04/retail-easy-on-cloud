import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetaData } from '../listMetaData';
import { AppListViewComponent, IndentItem, TableAction } from './app-list-view.component';

describe('AppListViewComponent', () => {
  let component: AppListViewComponent;
  let fixture: ComponentFixture<AppListViewComponent>;
  const sampleItems: IndentItem[] = [
    { id: 1, name: 'Rice bags', quantity: 10, status: 'Pending' },
    { id: 2, name: 'Cooking oil', quantity: 5, status: 'Approved' }
  ];
  const metadata = new MetaData();
  metadata.title = 'My Indents';
  metadata.fields = [
    { fieldName: 'name', fieldLabel: 'Item', visible: true, columnWidth: 50 },
    { fieldName: 'quantity', fieldLabel: 'Quantity', visible: true, columnWidth: 25 },
    { fieldName: 'status', fieldLabel: 'Status', visible: false, columnWidth: 25 }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppListViewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppListViewComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('metadata', metadata);
    fixture.componentRef.setInput('items', sampleItems);
    fixture.detectChanges();
  });

  it('renders the title, visible columns, and one table row per item', () => {
    const screen = fixture.nativeElement as HTMLElement;
    expect(screen.querySelector('h1')?.textContent).toContain('My Indents');
    expect(Array.from(screen.querySelectorAll('thead th')).map(cell => cell.textContent?.trim()))
      .toEqual(['Item', 'Quantity', 'Actions']);
    expect(screen.querySelectorAll('tbody tr').length).toBe(2);
    expect(screen.querySelector('tbody tr')?.textContent).toContain('Rice bags');
    expect(screen.querySelector('tbody tr')?.textContent).not.toContain('Pending');
  });

  it('emits the row id when Approve is clicked', () => {
    const actions: TableAction[] = [];
    component.tableAction.subscribe(action => actions.push(action));

    const approveButton = fixture.nativeElement.querySelector('tbody tr button') as HTMLButtonElement;
    approveButton.click();

    expect(actions).toEqual([{ type: 'toggle', id: 1 }]);
  });

  it('emits the row id when Delete is clicked', () => {
    const actions: TableAction[] = [];
    component.tableAction.subscribe(action => actions.push(action));

    const deleteButton = fixture.nativeElement.querySelectorAll('tbody tr button')[1] as HTMLButtonElement;
    deleteButton.click();

    expect(actions).toEqual([{ type: 'delete', id: 1 }]);
  });

  it('shows an empty message when there are no items', () => {
    fixture.componentRef.setInput('items', []);
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('tbody')?.textContent)
      .toContain('No items found.');
  });
});
