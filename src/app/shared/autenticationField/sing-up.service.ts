import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SingUp } from './sing-up.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingUpService {
  urlApi: string = `${environment.apiBaseUrl}/Users`;
  list: SingUp[] = [];
  constructor(private http: HttpClient) {}

  usersPost(users: SingUp): Observable<SingUp> {
    return this.http.post<SingUp>(this.urlApi, users);
  }
}
