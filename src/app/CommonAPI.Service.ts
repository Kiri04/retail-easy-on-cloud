import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class CommonApiService {
  private readonly http = inject(HttpClient);

  get<T>(url: string): Observable<any> {
    return this.http.get<T>(url);
  }

  post<TResponse, TBody>(url: string, body: TBody): Observable<TResponse> {
    return this.http.post<TResponse>(url, body);
  }

  patch<TResponse, TBody>(url: string, body: TBody): Observable<TResponse> {
    return this.http.patch<TResponse>(url, body);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
