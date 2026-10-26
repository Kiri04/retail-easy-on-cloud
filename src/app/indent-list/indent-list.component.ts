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
}
