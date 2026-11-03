
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface RegisterRequest {
  email: string;
  password: string;
  retypePassword: string;
}

@Injectable({ providedIn: 'root' })
export class RegisterUserService {
  private readonly http = inject(HttpClient);
  private readonly registerUrl = '/api/register';

  register(request: RegisterRequest): Observable<unknown> {
    return this.http.post<unknown>(this.registerUrl, request);
  }
  
  getHello():Observable<unknown>{
    return this.http.get('/api/hello')
  }
}
