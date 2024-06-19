import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LogIn } from './log-in.model';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  urlApi: string = `${environment.apiBaseUrl}/Users`;
  list: LogIn[] = [];
  constructor(private http: HttpClient) {}

  getById(Cod: number) {
    return this.http.get<LogIn>(`${this.urlApi}/${Cod}`);
  }
}
