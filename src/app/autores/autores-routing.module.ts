import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoAutoresComponent } from './pages/listado-autores/listado-autores.component';
import { ObrasFavoritasComponent } from './pages/obras-favoritas/obras-favoritas.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listado',
        component: ListadoAutoresComponent,
      },
      {
        path: 'favoritos',
        component: ObrasFavoritasComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '**',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
