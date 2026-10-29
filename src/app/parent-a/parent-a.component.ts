import { Component, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { ChildBComponent } from '../child-b/child-b.component';
import { ChildCComponent } from '../child-c/child-c.component';
import { CommonCounterService } from './common-counter.service';

@Component({
  selector: 'app-parent-a',
  standalone: true,
  imports: [AsyncPipe, ChildBComponent, ChildCComponent],
  templateUrl: './parent-a.component.html',
})
export class ParentAComponent {
  activeSection: 'signals' | 'rxjs' | 'service' = 'signals';

  readonly count = signal(0);
  readonly label = signal('Shared counter');

  updateLabel(event: Event): void {
    this.label.set((event.target as HTMLInputElement).value);
  }

  increment(): void {
    this.count.update(value => value + 1);
  }

  decrement(): void {
    this.count.update(value => value - 1);
  }

  reset(): void {
    this.count.set(0);
  }

  private readonly rxjsCountSubject = new BehaviorSubject<number>(0);
  private readonly rxjsLabelSubject = new BehaviorSubject<string>('RxJS counter');
  readonly rxjsCount$ = this.rxjsCountSubject.asObservable();
  readonly rxjsLabel$ = this.rxjsLabelSubject.asObservable();

  updateRxjsLabel(event: Event): void {
    this.rxjsLabelSubject.next((event.target as HTMLInputElement).value);
  }

  incrementRxjs(): void {
    this.rxjsCountSubject.next(this.rxjsCountSubject.getValue() + 1);
  }

  decrementRxjs(): void {
    this.rxjsCountSubject.next(this.rxjsCountSubject.getValue() - 1);
  }

  resetRxjs(): void {
    this.rxjsCountSubject.next(0);
  }

  private readonly commonCounter = inject(CommonCounterService);
  serviceCount = this.commonCounter.getCount();
  serviceLabel = this.commonCounter.getLabel();

  refreshServiceView(): void {
    this.serviceCount = this.commonCounter.getCount();
    this.serviceLabel = this.commonCounter.getLabel();
  }

  updateServiceLabel(event: Event): void {
    this.commonCounter.setLabel((event.target as HTMLInputElement).value);
    this.refreshServiceView();
  }

  incrementService(): void {
    this.commonCounter.increment();
    this.refreshServiceView();
  }

  decrementService(): void {
    this.commonCounter.decrement();
    this.refreshServiceView();
  }

  resetService(): void {
    this.commonCounter.reset();
    this.refreshServiceView();
  }

  updateServiceWithoutRefresh(): void {
    this.commonCounter.increment();
  }
}
