import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesRoutingModule } from './modules/modules-routing.module';

const routes: Routes = [
  {
    path: 'page',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    ModulesRoutingModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ModulesRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
