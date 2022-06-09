import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicsComponent } from './pages/basics/basics.component';
import { DinamicsComponent } from './pages/dinamics/dinamics.component';
import { SwitchsComponent } from './pages/switchs/switchs.component';
import { CustomMinDirective } from './pages/directives/custom-min.directive';


@NgModule({
  declarations: [
    BasicsComponent,
    DinamicsComponent,
    SwitchsComponent,

    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule,
  ]
})
export class TemplateModule { }
