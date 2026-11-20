import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-daily-calories',
  standalone: true,
  imports: [ CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule],
  templateUrl: './daily-calories.component.html',
  styleUrl: './daily-calories.component.scss'
})
export class DailyCaloriesComponent {

  selectedDay: 'today' | 'yesterday' = 'today';

today = new Date();

calorieSummary = [
  { label: 'Daily Goal', value: 2000 },
  { label: 'Consumed', value: 1250 },
  { label: 'Remaining', value: 750 }
];

macros = [
  { name: 'Protein', value: 65, progress: 60 },
  { name: 'Carbs', value: 145, progress: 72 },
  { name: 'Fat', value: 42, progress: 45 }
];

foodItems = [
  {
    meal: 'Breakfast',
    description: '3 Idli + Sambar',
    calories: 285
  },
  {
    meal: 'Lunch',
    description: 'Rice + Chicken',
    calories: 540
  },
  {
    meal: 'Snacks',
    description: 'Banana + Nuts',
    calories: 220
  },
  {
    meal: 'Dinner',
    description: 'Chapati + Curry',
    calories: 205
  }
];

totalCaloriesConsumed(): number {
  return this.foodItems.reduce((acc, curr) => acc + curr.calories, 0);
}

}
