import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly router = inject(Router);
  rootUpdates = 0;
  title = 'retail-easy-on-cloud';
  // metaData: any = new metaData();
}
