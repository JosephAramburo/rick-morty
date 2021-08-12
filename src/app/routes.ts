import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RickMortyModule } from '@modules/rick-morty/rick-morty.module';


export const routes: Routes = [
  { 
    path      : '',
    children  : [
      { path : '', component : HomeComponent },
      { path : 'rick-morty', loadChildren:() => RickMortyModule, pathMatch:'full' }
    ]
  },
  { path: '**', component: HomeComponent },
];
