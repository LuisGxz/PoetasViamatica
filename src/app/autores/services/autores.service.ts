import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autores, ObrasFavoritas, ObrasRandom, obra } from '../interfaces/autores.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(private http:HttpClient) { }

  getAutores(): Observable<Autores>{
    return this.http.get<Autores>('https://poetrydb.org/author');
  }
  getObrasRandom(): Observable<ObrasRandom[]>{
    return this.http.get<ObrasRandom[]>(`https://poetrydb.org/random/10/author,title.json`);
    
  }
  getObras(autor: string): Observable<obra[]>{
    return this.http.get<obra[]>(`https://poetrydb.org/author/${autor}`);
  }

  guardarObraFavorita(obra: ObrasFavoritas): void {
  const obrasFavoritas: ObrasFavoritas[] = JSON.parse(localStorage.getItem('obrasFavoritas') || '[]');
  obrasFavoritas.push(obra);
  localStorage.setItem('obrasFavoritas', JSON.stringify(obrasFavoritas));
}

  
}
