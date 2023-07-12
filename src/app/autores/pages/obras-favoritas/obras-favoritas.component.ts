import { Component, OnInit } from '@angular/core';
import { ObrasFavoritas } from '../../interfaces/autores.interface';
import { AutoresService } from '../../services/autores.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obras-favoritas',
  templateUrl: './obras-favoritas.component.html',
  styleUrls: ['./obras-favoritas.component.css']
})
export class ObrasFavoritasComponent implements OnInit{
  obrasFavoritas: ObrasFavoritas[] = [];

  constructor(
    private autoresService: AutoresService,
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.obtenerObrasFavoritas();
  }
  
  obtenerObrasFavoritas(): void {
    const obrasFavoritasString: string | null = localStorage.getItem('obrasFavoritas');
    this.obrasFavoritas = obrasFavoritasString ? JSON.parse(obrasFavoritasString) : [];
  }
  
  
  eliminarFavorito(titulo: string): void {
    this.obrasFavoritas = this.obrasFavoritas.filter(obra => obra.title !== titulo);
    localStorage.setItem('obrasFavoritas', JSON.stringify(this.obrasFavoritas));
  }




}
