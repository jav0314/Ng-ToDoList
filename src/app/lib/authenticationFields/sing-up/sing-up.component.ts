import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { appSettings } from '../../../Settings/app-settings';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css',
})
export class SingUpComponent {
  nombre: string = '';
  apellido: string = '';
  celular: string = '';
  cedula: string = '';
  email: string = '';
  password: string = '';
  passwordConfirm: string = '';

  private https = inject(HttpClient);
  private urlApi: string = appSettings.apiUrl + '/Users';

  constructor(private http: HttpClient) {}
  SingUp() {
    // return this.http.post<Users>(this.urlApi);
  }
}
