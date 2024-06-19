import { Component } from '@angular/core';
import { LogIn } from '../../../shared/autenticationField/log-in.model';
import { LogInService } from '../../../shared/autenticationField/log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  userId: string = '';
  usuarioEncontrado: LogIn | undefined;
  constructor(public service: LogInService) {}
  buscarUsuario() {
    if (this.userId.trim() !== '') {
      this.service.getById(parseInt(this.userId, 10)).subscribe(
        (usuario: LogIn) => {
          this.usuarioEncontrado = usuario;
        },
        (error) => {
          console.error('Error al buscar usuario:', error);
          this.usuarioEncontrado = undefined;
        }
      );
    }
  }
}
