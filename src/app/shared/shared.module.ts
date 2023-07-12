import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    FooterComponent,
    ErrorPageComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    FooterComponent,
    ErrorPageComponent
  ]
})
export class SharedModule { }
