import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { ModalObrasComponent } from './components/modal-obras/modal-obras.component';
import { CardObraComponent } from './components/card-obra/card-obra.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoAutoresComponent } from './pages/listado-autores/listado-autores.component';
import { ObrasFavoritasComponent } from './pages/obras-favoritas/obras-favoritas.component';


@NgModule({
  declarations: [
    ModalObrasComponent,
    CardObraComponent,
    HomeComponent,
    ListadoAutoresComponent,
    ObrasFavoritasComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule
  ]
})
export class AutoresModule { }
