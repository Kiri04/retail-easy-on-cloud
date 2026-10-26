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
  
}
