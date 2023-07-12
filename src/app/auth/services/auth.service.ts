import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_TOKEN_KEY = 'authToken';

  constructor() { }

  login(usuario: string, password: string): boolean {
    // Realiza aquí la lógica de autenticación, por ejemplo, consultando una API o verificando en tu base de datos
    // Si las credenciales son válidas, guarda el token de autenticación en el local storage
    if (usuario === 'admin' && password === 'admin') {
      const authToken = 'token'; // Genera un token válido aquí
      localStorage.setItem(this.AUTH_TOKEN_KEY, authToken);
      return true;
    }
    return false;
  }

  logout(): void {
    // Elimina el token de autenticación del local storage al hacer logout
    localStorage.removeItem(this.AUTH_TOKEN_KEY);
  }

  verificaAutenticacion(): Observable<boolean> {
    // Verifica si hay un token de autenticación en el local storage y devuelve un Observable<boolean>
    const authToken = localStorage.getItem(this.AUTH_TOKEN_KEY);
    return of(!!authToken);
  }
}
