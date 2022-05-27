import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomTranspilersRoutingModule } from './custom-transpilers-routing.module';
import { CustomTranspilersComponent } from './custom-transpilers.component';
import { TranslocoModule, TRANSLOCO_SCOPE, TRANSLOCO_TRANSPILER } from '@ngneat/transloco';
import { CustomTranspiler } from './custom.transpiler';


@NgModule({
  declarations: [
    CustomTranspilersComponent
  ],
  imports: [
    CommonModule,
    CustomTranspilersRoutingModule,
    TranslocoModule
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'custom-transpilers',
        alias: 'ct'
      }
    },
  ]
})
export class CustomTranspilersModule { }
