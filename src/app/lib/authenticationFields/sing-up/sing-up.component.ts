import { Component, inject } from '@angular/core';
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
    secondSurname: '',
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
    if (this.confirmPass != this.user.password) {
      alert('Password is not equal');
      return;
    }
    console.log(this.user);
    this.service.usersPost(this.user).subscribe({
      next: (user: SingUp) => {},
      error: (error: any) => {},
    });
  }
}
