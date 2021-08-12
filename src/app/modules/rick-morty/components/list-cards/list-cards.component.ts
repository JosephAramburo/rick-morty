import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardItemInterface } from '@interfaces/card-item-interface';
import { CharacterInterface, InfoInterface } from '@interfaces/character-interface';
import { EpisodeInterface } from '@interfaces/episode-interface';
import { EpisodeResponseInterface } from '@interfaces/episode-response-interface';
import { LocationInterface } from '@interfaces/location-interface';
import { LocationItemInterface } from '@interfaces/location-item-interface';
import { TypeFilterInterface } from '@interfaces/type-filter-interface';
import { CharacterService } from '@services/character.service';
import { EpisodesService } from '@services/episodes.service';
import { LocationService } from '@services/location.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  filter                : string                    = '';
  filterSelected        : string                    = '';
  filterAutocomplete    : CardItemInterface         = {} as CardItemInterface;
  info                  : InfoInterface             = {} as InfoInterface;
  listAllCharacters     : CardItemInterface[]       = [];
  listCharactersCompare : CardItemInterface[]       = [];
  listCharacters        : CardItemInterface[]       = [];
  listLocations         : LocationItemInterface[]   = [];
  listEpisodes          : EpisodeInterface[]        = [];
  typeFilters           : TypeFilterInterface[]     = [];

  constructor(
    private characterServices   : CharacterService,
    private episodesServices    : EpisodesService,
    private locationsServices   : LocationService,
    private toastServices       : ToastrService
  ) { }

  ngOnInit(): void {
    this.setTypeFilters();
    this.getDataCharacters();
  }

  setTypeFilters():void{
    this.typeFilters = [
      { id : 'inlineRadio1', name: 'character',         text: 'Character' },
      { id : 'inlineRadio2', name: 'location',          text: 'Location' },
      { id : 'inlineRadio3', name: 'episodes',          text: 'Episodes' },
      { id : 'inlineRadio4', name: 'characterComparer', text: 'Character Comparasion' }
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
        this.getEpisodes();
        break;
        case this.typeFilters[3].name:
          this.getDataCharacters(true);
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

  getEpisodes():Promise<EpisodeResponseInterface>{
    return new Promise((resolve, reject) => {
      this.episodesServices.get().subscribe(response => {
        this.listEpisodes = response.results;
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

  getDataCharacters(isCompare : boolean = false):void{
    this.getCharacters().then(response => {
      this.listAllCharacters = response.results;
      // this.info           = response.info;
      if(!isCompare){
        let getIds : string = this.listAllCharacters.map(x => x.id.toString()).join(',');

        this.getEpisodesByIds(getIds).then(response => {
          this.listAllCharacters.forEach(item => {
            item.seen = response.find(x => x.id === item.id)?.name;
          });
        }).catch((error : HttpErrorResponse) => {

        });

        this.listCharacters = this.listAllCharacters;
      }
    }).catch((error : HttpErrorResponse) => {

    });
  }

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => this.listCharacters.filter(state => new RegExp(term, 'mi').test(state.name)).slice(0, 10))
  )

  formatter = (item: CardItemInterface) => item.name;

  selectedCharacter(evn : any, input : any):void{
    if(this.listCharactersCompare.length > 2){
      this.toastServices.warning('Limit character for comparasion is 3')
      this.emptyInputAutocomplete(input);
      return;
    }

    let item    : CardItemInterface = evn.item as CardItemInterface;
    let indexO  : number            = this.listCharactersCompare.indexOf(item);

    if(indexO != -1){
      this.toastServices.warning('Exist character add')
      this.emptyInputAutocomplete(input);
      return;
    }

    this.listCharactersCompare.push(item);
    this.emptyInputAutocomplete(input);
  }

  emptyInputAutocomplete(input : any):void{
    setTimeout(() => {
      this.filterAutocomplete = {} as CardItemInterface;
      input.value             = '';
    },200);
  }

}
