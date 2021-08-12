import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardItemInterface } from '@interfaces/card-item-interface';
import { CharacterInterface, InfoInterface } from '@interfaces/character-interface';
import { EpisodeInterface } from '@interfaces/episode-interface';
import { LocationInterface } from '@interfaces/location-interface';
import { LocationItemInterface } from '@interfaces/location-item-interface';
import { TypeFilterInterface } from '@interfaces/type-filter-interface';
import { CharacterService } from '@services/character.service';
import { EpisodesService } from '@services/episodes.service';
import { LocationService } from '@services/location.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  filter          : string                    = '';
  filterSelected  : string                    = '';
  info            : InfoInterface             = {} as InfoInterface;
  listCharacters  : CardItemInterface[]       = [];
  listLocations   : LocationItemInterface[]   = [];
  typeFilters     : TypeFilterInterface[]     = [];

  constructor(
    private characterServices   : CharacterService,
    private episodesServices    : EpisodesService,
    private locationsServices   : LocationService
  ) { }

  ngOnInit(): void {
    this.setTypeFilters();
    this.getDataCharacters();
  }

  setTypeFilters():void{
    this.typeFilters = [
      { id : 'inlineRadio1', name: 'character',   text: 'Personaje' },
      { id : 'inlineRadio2', name: 'location',    text: 'Ubicación' },
      { id : 'inlineRadio3', name: 'episodes',    text: 'Episodios' }
    ];

    this.filterSelected = this.typeFilters[0].name;
  }

  changeFilter(item : TypeFilterInterface):void{
    switch(item.name){
      case this.typeFilters[0].name:
        this.getDataCharacters();
        break;
      case this.typeFilters[1].name:
        this.getLocations();
        break;
      case this.typeFilters[2].name:
        break;
    }
  }

  getLocations():Promise<LocationInterface>{
    return new Promise((resolve, reject) => {
      this.locationsServices.get().subscribe(response => {
        this.listLocations = response.results;
        resolve(response);
      },(error : HttpErrorResponse) => {
        reject(error);
      });
    });
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

  getDataCharacters():void{
    this.getCharacters().then(response => {
      this.listCharacters = response.results;
      this.info           = response.info;
      let getIds : string = this.listCharacters.map(x => x.id.toString()).join(',');

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
