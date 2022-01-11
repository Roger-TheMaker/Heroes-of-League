import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { animation: 'heroes' },
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent,
    data: { animation: 'hero' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}

// In the AppRoutingModule, you used the static
//  RouterModule.forRoot() method to register
//   the routes and application level service
//    providers. In a feature module you
//    use the static forChild() method.
