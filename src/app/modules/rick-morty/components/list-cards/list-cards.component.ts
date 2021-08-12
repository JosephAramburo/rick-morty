import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardItemInterface } from '@interfaces/card-item-interface';
import { CharacterInterface, InfoInterface } from '@interfaces/character-interface';
import { EpisodeInterface } from '@interfaces/episode-interface';
import { CharacterService } from '@services/character.service';
import { EpisodesService } from '@services/episodes.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  listCharacters  : CardItemInterface[] = [];
  info            : InfoInterface       = {} as InfoInterface;

  constructor(
    private characterServices : CharacterService,
    private episodesServices  : EpisodesService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getCharacters():Promise<CharacterInterface>{
    return new Promise((resolve, reject) => {
      this.characterServices.get().subscribe( response => {
        resolve(response);
      },(error : HttpErrorResponse) => {
        reject(error);
      });
    });
  }

  getEpisodesByIds(ids : string):Promise<EpisodeInterface[]>{
    return new Promise((resolve, reject) => {
      this.episodesServices.getByIds(ids).subscribe( response => {
        resolve(response);
      },(error : HttpErrorResponse) => {
        reject(error);
      });
    });
  }

  getData():void{
    this.getCharacters().then(response => {
      this.listCharacters = response.results;
      this.info           = response.info;

      let getIds : string = this.listCharacters.map(x => x.id.toString()).join(',');
      console.log(getIds);

      this.getEpisodesByIds(getIds).then(response => {
        this.listCharacters.forEach(item => {
          item.seen = response.find(x => x.id === item.id)?.name;
        });
      }).catch((error : HttpErrorResponse) => {

      });

    }).catch((error : HttpErrorResponse) => {

    });
  }

}
