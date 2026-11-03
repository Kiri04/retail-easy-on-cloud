import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RegisterUserService } from './register-user.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs';
@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbAlertModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss'
})
export class RegisterUserComponent {
  message = '';
  alertType: 'success' | 'danger' = 'danger';
  isSubmitting = false;
  registerForm: RegisterForm = {
    email: '',
    password:'',
    retypePassword:'',
  };

  constructor (private registerUserService: RegisterUserService ) {

  }
  
  ngOnInit(){
    this.registerUserService.getHello().subscribe({
      next: (res)=>{
        console.log(res);
      }
    }
    )
  }

  register(form: NgForm): void {
    if (this.isSubmitting) return;
    this.message = '';
    if (form.invalid) {
      this.alertType = 'danger';
      this.message = 'Enter a valid email and complete all fields.';
      return;
    }
    if(this.registerForm.password !== this.registerForm.retypePassword){
      this.alertType = 'danger';
      this.message = 'Passwords do not match.';
      return;
    }
    this.isSubmitting = true;
    this.registerUserService.register(this.registerForm).pipe(
      finalize(() => this.isSubmitting = false)
    ).subscribe({
      next : (res) => {
        this.alertType = 'success';
        this.message = 'Registration successful.';
      },
      error: (err) =>{
        this.alertType = 'danger';
        this.message = `${err.error.message}`;
      }
    })

  }
}


export interface RegisterForm {
  email: string;
  password: string;
  retypePassword:string
}
