import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fields, MetaData } from '../listMetaData';

export interface IndentItem {
  id: number;
  name: string;
  quantity: number;
  status: 'Pending' | 'Approved';
}

export interface TableAction {
  type: 'toggle' | 'delete';
  id: number;
}

@Component({
  selector: 'app-app-list-view',
  standalone: true,
  imports: [],
  templateUrl: './app-list-view.component.html',
  styleUrl: './app-list-view.component.scss'
})
export class AppListViewComponent {
  @Input() metadata = new MetaData();
  @Input() items: IndentItem[] = [];
  @Output() tableAction = new EventEmitter<TableAction>();

  get visibleFields(): Fields[] {
    return this.metadata.fields.filter(field => field.visible);
  }

  getValue(item: IndentItem, field: Fields): string | number | undefined {
    return item[field.fieldName as keyof IndentItem];
  }

  onAction(type: TableAction['type'], id: number): void {
    this.tableAction.emit({ type, id });
  }
}
