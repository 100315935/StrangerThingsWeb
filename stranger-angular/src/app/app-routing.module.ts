import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'temporadas', loadChildren: './temporadas/temporadas.module#TemporadasModule' },
  { path: 'reparto', loadChildren: './reparto/reparto.module#RepartoModule' },
  { path: 'contactos', loadChildren: './contactos/contactos.module#ContactosModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
