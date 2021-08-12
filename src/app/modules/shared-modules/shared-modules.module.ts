import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardLocationComponent } from './components/card-location/card-location.component';
import { CardEpisodeComponent } from './components/card-episode/card-episode.component';



@NgModule({
  declarations: [
    CardItemComponent,
    CardLocationComponent,
    CardEpisodeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardItemComponent,
    CardLocationComponent,
    CardEpisodeComponent
  ]
})
export class SharedModulesModule { }
