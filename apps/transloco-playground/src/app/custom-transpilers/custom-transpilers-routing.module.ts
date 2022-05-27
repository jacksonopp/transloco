import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomTranspilersComponent } from './custom-transpilers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomTranspilersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomTranspilersRoutingModule { }
