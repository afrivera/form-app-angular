import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicsComponent } from './pages/basics/basics.component';
import { DinamicsComponent } from './pages/dinamics/dinamics.component';
import { SwitchsComponent } from './pages/switchs/switchs.component';


@NgModule({
  declarations: [
    BasicsComponent,
    DinamicsComponent,
    SwitchsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
