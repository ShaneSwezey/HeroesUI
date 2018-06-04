import { RouterModule, Routes } from '@angular/router';
import { HeroesindexComponent } from './app/heroesindex/heroesindex.component';
import { HerodetailComponent } from './app/herodetail/herodetail.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    { path: 'heroes', component: HeroesindexComponent },
    { path: 'herodetail/:name', component: HerodetailComponent },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
