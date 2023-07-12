import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AutoresService } from '../../services/autores.service';
import { ObrasRandom, obra } from '../../interfaces/autores.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-obras',
  templateUrl: './modal-obras.component.html',
  styleUrls: ['./modal-obras.component.css']
})
export class ModalObrasComponent implements OnInit {

  obras: obra[] = [];
  autor: string = '';
  obrasRandom: ObrasRandom[] = [];
  isUserAuthenticated = false;
  obrasFavoritas: ObrasRandom[] = [];

  constructor(
    private autoresService: AutoresService,
    private authService: AuthService,
    private dialogRef: MatDialogRef<ModalObrasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.autor = this.data;
    this.autoresService.getObras(this.autor)
      .subscribe(obras => {
        this.obras = obras;
        console.log('Obras:', this.obras);
      });

    this.autoresService.getObrasRandom()
      .subscribe(obrasRandom => {
        this.obrasRandom = obrasRandom;
        console.log('Obras random:', this.obrasRandom);
      });

    this.authService.verificaAutenticacion()
      .subscribe(authenticated => {
        this.isUserAuthenticated = authenticated;
      });

    this.obtenerObrasFavoritas();
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  guardarObraFavorita(obra: ObrasRandom): void {
    if (this.isUserAuthenticated) {
      this.autoresService.guardarObraFavorita(obra);
      this.obtenerObrasFavoritas();
      console.log('Obra guardada como favorita');
      
      // Guardar las obras favoritas en el local storage
      localStorage.setItem('obrasFavoritas', JSON.stringify(this.obrasFavoritas));
    } else {
      alert('Debe iniciar sesión para guardar obras favoritas');
      this.router.navigate(['/auth/login']);
      this.closeModal();
    }
  }
  

  isObraFavorita(obra: ObrasRandom): boolean {
    return this.obrasFavoritas.some((favObra) => favObra.title === obra.title && favObra.author === obra.author);
  }

  obtenerObrasFavoritas(): void {
    const obrasFavoritasString = localStorage.getItem('obrasFavoritas');
    if (obrasFavoritasString) {
      this.obrasFavoritas = JSON.parse(obrasFavoritasString);
    } else {
      this.obrasFavoritas = [];
    }
  }


}
