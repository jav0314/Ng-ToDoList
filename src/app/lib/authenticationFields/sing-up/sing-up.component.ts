import { Component } from '@angular/core';

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

  SingUp() {}
}
