import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'retail-easy-on-cloud';
  // metaData: any = new metaData();
  count = signal<number>(0);
  arr = [{
    amount: 100,
  }, {
    amount: 200,
  },
  {
    amount: 300,
  }
  ]
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit() {
    console.log(this.arr.reduce((acc, curr) => (acc + curr.amount), 0));
    this.loginForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.loginForm.patchValue({
      email: 'user@example.com',
    });
  }

  resetCount() {
    this.count.set(0);
  }
}
