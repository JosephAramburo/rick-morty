import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardLocationComponent } from './components/card-location/card-location.component';
import { CardEpisodeComponent } from './components/card-episode/card-episode.component';
import { EpisodeDetailComponent } from './components/Modals/episode-detail/episode-detail.component';



@NgModule({
  declarations: [
    CardItemComponent,
    CardLocationComponent,
    CardEpisodeComponent,
    EpisodeDetailComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule
  ],
  exports:[
    CardItemComponent,
    CardLocationComponent,
    CardEpisodeComponent
  ]
})
export class SharedModulesModule { }
