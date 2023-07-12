import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginForm: FormGroup = this.fb.group({
    usuario: ['', [Validators.required]],
    password: ['', Validators.required]
  });


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ){}

    campoNoValido(campo: string) {
      return this.loginForm.controls[campo]?.errors && this.loginForm.controls[campo]?.touched;
    }
  
    login() {
      if (this.loginForm.invalid) {
        this.loginForm.markAllAsTouched();
        return;
      }
  
      const usuario = this.loginForm.controls['usuario'].value;
      const password = this.loginForm.controls['password'].value;
  
      const isAuthenticated = this.authService.login(usuario, password);
  
      if (isAuthenticated) {
        this.router.navigate(['/autores']);
      } else {
        // Manejo de error de autenticación
      }
  
      this.loginForm.reset();
    }


}
