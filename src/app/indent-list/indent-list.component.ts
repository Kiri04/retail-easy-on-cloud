import { Component, DestroyRef, inject,ChangeDetectionStrategy } from '@angular/core';
import { AppListViewComponent, IndentItem, TableAction } from '../app-list-view/app-list-view.component';
import { INDENT_LIST_METADATA } from './indent-list.metadata';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonApiService } from '../CommonAPI.Service';
import { NgFor } from '../../../node_modules/@angular/common/index';

@Component({
  selector: 'app-indent-list',
  standalone: true,
  imports: [AppListViewComponent, FormsModule],
  templateUrl: './indent-list.component.html',
  styleUrl: './indent-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class IndentListComponent {
  sampleString = '';

  proceedSubmit(){
    let arr = [99,66,89,15,78];
    let result = [];
    for(let i = arr.length - 1; i >= 0; i --){
      result.push(arr[i]);
    }
    alert(result);
  }

  reverseString(){
    let value = this.sampleString;
    let result = ""
    for(let i = value.length -1; i >= 0; i --){
      result += value[i];
    }
    alert(result);
  }
}
