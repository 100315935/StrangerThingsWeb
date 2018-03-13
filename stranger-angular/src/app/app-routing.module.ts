import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
