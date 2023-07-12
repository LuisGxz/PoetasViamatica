import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { ModalObrasComponent } from './components/modal-obras/modal-obras.component';
import { CardObraComponent } from './components/card-obra/card-obra.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoAutoresComponent } from './pages/listado-autores/listado-autores.component';
import { ObrasFavoritasComponent } from './pages/obras-favoritas/obras-favoritas.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

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
    AutoresRoutingModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class AutoresModule { }
