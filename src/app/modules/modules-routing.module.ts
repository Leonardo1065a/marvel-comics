import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'comics',
    loadChildren: () => import('./comics/comics.module').then((m) => m.ComicsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
