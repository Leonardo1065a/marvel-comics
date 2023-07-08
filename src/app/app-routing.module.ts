import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  { 
    path: 'page', 
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
