import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  // SidebarService,
  SharedService,
  UsuarioService
 } from './services.index';
import { HttpClientModule } from '@angular/common/http';
import { SubirArchivosService } from './subir-archivo/subir-archivos.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    // SidebarService,
    SharedService,
    UsuarioService,
    SubirArchivosService
  ]
})
export class ServiceModule { }
