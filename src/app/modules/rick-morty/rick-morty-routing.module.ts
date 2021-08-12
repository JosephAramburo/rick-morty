import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCardsComponent } from '@modules/rick-morty/components/list-cards/list-cards.component';

const routes: Routes = [
  { path : '', component : ListCardsComponent, pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickMortyRoutingModule { }
