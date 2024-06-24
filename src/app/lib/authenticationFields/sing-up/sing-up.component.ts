import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { appSettings } from '../../../Settings/app-settings';
import { SingUpService } from '../../../shared/autenticationField/sing-up.service';
import { SingUp } from '../../../shared/autenticationField/sing-up.model';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css',
})
export class SingUpComponent {
  user: SingUp = {
    Cod: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    dateBirth: '',
    email: '',
    phone: '',
    userName: '',
    password: '',
    nationality: '',
  };
  confirmPass: string = '';
  constructor(public service: SingUpService) {}
  SingUp() {
    console.log('entre en funcion');
    if (this.confirmPass != this.user.password) {
      alert('Password is not equal');
      return;
    }
    console.log(this.user);
    const observer = {
      next: (user: SingUp) => {
        console.log('Success');
      },
      error: (error: any) => {
        console.log('Error');
      },
    };
    this.service.usersPost(this.user).subscribe(observer);
  }
}
