import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'pokemons',
    loadComponent:() =>import('./pages/pokemons/pokemonsPage')
  },
  {
    path: 'pokemon/:id',
    loadComponent:() =>import('./pages/pokemon-page/pokemon-page')
  },
  {
    path: 'about',
    loadComponent:() =>import('./pages/about/about-pages')
  },
  {
    path: 'pricing',
    loadComponent:() =>import('./pages/pricing/pricing-pages')
  },
  {
    path: 'contact',
    loadComponent:() =>import('./pages/contact/contact')
  },
  {
    path: '**',
    redirectTo: 'about',
  },
];
