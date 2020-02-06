import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';


const routes: Routes = [
  { path: '', component: BibliothequeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
