import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RickMortyRoutingModule } from './rick-morty-routing.module';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { SharedModulesModule } from '@modules/shared-modules/shared-modules.module';



@NgModule({
  declarations: [
    ListCardsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RickMortyRoutingModule,
    SharedModulesModule
  ]
})
export class RickMortyModule { }
