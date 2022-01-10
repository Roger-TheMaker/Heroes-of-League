import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
//import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//  The RouterModule.forRoot() method returns a
//  module that contains the configured Router service provider,
//  plus other providers that the routing library requires

// A redirect route requires a pathMatch property to tell the router how
//  to match a URL to the path of a route. In this app, the router
//   should select the route to the HeroListComponent only when
//    the entire URL matches '', so set the pathMatch value to 'full'.

// pathMatch: 'full' means, that the whole URL path needs to match and is
// consumed by the route matching algorithm.

// pathMatch: 'prefix' means, the first route where the path
// matches the start of the URL is chosen, but then the
// route matching algorithm is continuing searching for
//  matching child routes where the rest of the URL matches.

// Characteristics:
// Separates routing concerns from other application concerns.
// Provides a module to replace or remove when testing the application.
// The routing module is helpful as your application grows and
// when the configuration includes specialized guard and resolver services.
// Does not declare components.
