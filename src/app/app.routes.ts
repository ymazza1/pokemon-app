import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./features/pokemon-list/pokemon-list.component').then((m)=>m.PokemonList)
    },
    {
        path: 'trainer',
        loadComponent: () => import("./features/trainer/trainer.component").then((m)=>m.Trainer)
    },
    {
        path: 'pokemon/:name',
        loadComponent: () => import("./features/pokemon/pokemon.component").then((m)=>m.Pokemon)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
