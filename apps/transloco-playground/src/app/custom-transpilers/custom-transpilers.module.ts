import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomTranspilersRoutingModule } from './custom-transpilers-routing.module';
import { CustomTranspilersComponent } from './custom-transpilers.component';


@NgModule({
  declarations: [
    CustomTranspilersComponent
  ],
  imports: [
    CommonModule,
    CustomTranspilersRoutingModule
  ]
})
export class CustomTranspilersModule { }
