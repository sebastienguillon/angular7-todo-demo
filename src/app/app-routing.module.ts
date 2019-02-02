import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'form',
    component: MyFormComponent
  }, {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
