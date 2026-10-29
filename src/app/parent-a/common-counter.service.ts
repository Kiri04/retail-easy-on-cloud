import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CommonCounterService {
  private count = 0;
  private label = 'Service counter';

  getCount(): number {
    return this.count;
  }

  getLabel(): string {
    return this.label;
  }

  setLabel(label: string): void {
    this.label = label;
  }

  increment(): void {
    this.count += 1;
  }

  decrement(): void {
    this.count -= 1;
  }

  reset(): void {
    this.count = 0;
  }
}
