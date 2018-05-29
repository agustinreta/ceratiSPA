import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/body/home/home.component';
import { DiscografiaComponent } from '../app/components/body/discografia/discografia.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'discografia', component: DiscografiaComponent },
    // { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

export const APP_ROUTING = RouterModule.forRoot(appRoutes);
