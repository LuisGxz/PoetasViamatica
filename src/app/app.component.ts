import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autores';

  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  verificarLogin() {
    if (!this.isAuthenticated()) {
      alert('Debe iniciar sesión para acceder a las obras favoritas');
      this.router.navigate(['/auth/login']);
    } else {
      this.router.navigate(['/autores/favoritos']);
    }
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
