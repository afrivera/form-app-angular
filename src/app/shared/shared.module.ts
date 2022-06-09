import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ], 
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
