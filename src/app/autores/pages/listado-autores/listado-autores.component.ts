import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../../services/autores.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalObrasComponent } from '../../components/modal-obras/modal-obras.component';

@Component({
  selector: 'app-listado-autores',
  templateUrl: './listado-autores.component.html',
  styleUrls: ['./listado-autores.component.css']
})
export class ListadoAutoresComponent implements OnInit {

  autores!: string[];
  autoresPaginados: string[] = [];
  pagina = 1;
  registrosPorPagina = 10;

  constructor(
    private autoresService: AutoresService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.autoresService.getAutores()
      .subscribe(({ authors }) => {
        this.autores = authors;
        this.actualizarAutoresPaginados();
      });
  }

  openModal(autor: string): void {
    this.dialog.open(ModalObrasComponent, {
      width: '1400px',
      height: '600px',
      data: autor
    });
  }

  anteriorPagina(event: Event): void {
    event.preventDefault();
    if (this.pagina > 1) {
      this.pagina--;
      this.actualizarAutoresPaginados();
    }
  }

  siguientePagina(event: Event): void {
    event.preventDefault();
    if (this.pagina < this.totalPaginas) {
      this.pagina++;
      this.actualizarAutoresPaginados();
    }
  }

  irAPagina(event: Event, pagina: number): void {
    event.preventDefault();
    this.pagina = pagina;
    this.actualizarAutoresPaginados();
  }

  get totalPaginas(): number {
    return Math.ceil(this.autores.length / this.registrosPorPagina);
  }

  obtenerNumeroRegistro(indice: number): number {
    return (this.pagina - 1) * this.registrosPorPagina + indice + 1;
  }

  actualizarAutoresPaginados(): void {
    const inicio = (this.pagina - 1) * this.registrosPorPagina;
    const fin = inicio + this.registrosPorPagina;
    this.autoresPaginados = this.autores.slice(inicio, fin);
  }

  range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

}
