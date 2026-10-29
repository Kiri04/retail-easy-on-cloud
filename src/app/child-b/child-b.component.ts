import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-b',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './child-b.component.html',
})
export class ChildBComponent {
  @Input() count = 0;
  @Input() label = '';
  @Output() increment = new EventEmitter<void>();

  @Input({ required: true }) mode!: 'signals' | 'rxjs' | 'service';
  @Input() rxjsCount$?: Observable<number>;
  @Input() rxjsLabel$?: Observable<string>;
  @Output() rxjsIncrement = new EventEmitter<void>();
  @Output() serviceIncrement = new EventEmitter<void>();
}
