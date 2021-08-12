import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';


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
    SharedModulesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
  ]
})
export class RickMortyModule { }
