import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-c',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './child-c.component.html',
})
export class ChildCComponent {
  @Input() count = 0;
  @Input() label = '';
  @Output() decrement = new EventEmitter<void>();

  @Input({ required: true }) mode!: 'signals' | 'rxjs' | 'service';
  @Input() rxjsCount$?: Observable<number>;
  @Input() rxjsLabel$?: Observable<string>;
  @Output() rxjsDecrement = new EventEmitter<void>();
  @Output() serviceDecrement = new EventEmitter<void>();
}
