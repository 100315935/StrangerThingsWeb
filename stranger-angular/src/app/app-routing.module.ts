import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TemporadasComponent } from './temporadas/temporadas.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'temporadas', loadChildren: './temporadas/temporadas.module#TemporadasModule' },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
