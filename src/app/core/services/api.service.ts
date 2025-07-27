import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data);
  }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }

  // Add put, delete, etc. as needed
  login(email: string, password: string): Observable<any> {
    const endpoint = 'api/auth/login';
    console.log('Base URL:', this.baseUrl);
    console.log('Endpoint:', endpoint);
    console.log('Full URL:', `${this.baseUrl}/${endpoint}`);
    
    return new Observable(observer => {
      this.post<any>(endpoint, { email, password }).subscribe({
        next: (response) => {
          if (response?.data?.tokens?.accessToken) {
            sessionStorage.setItem('accessToken', response.data.tokens.accessToken);
          }
          observer.next(response);
          observer.complete();
        },
        error: (err) => {
          observer.error(err);
        }
      });
    });
  }
}
