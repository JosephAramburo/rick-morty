import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CharacterInfo } from '@interfaces/character-interface';
import { EpisodeInterface } from '@interfaces/episode-interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterService } from '@services/character.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent implements OnInit, AfterViewInit {
  @Input() episode : EpisodeInterface = {} as EpisodeInterface;

  constructor(
    public activeModal        : NgbActiveModal,
    private charactersService : CharacterService
  ) {}

  ngAfterViewInit(): void {
    this.getCharactersByIds();
  }

  ngOnInit(): void {
  }

  getCharactersByIds():void{
    if(this.episode?.characters){
      let ids : string = this.episode.characters.map(x => x.replace('https://rickandmortyapi.com/api/character/', '')).join(',');

      this.charactersService.getByIds(ids).subscribe(response => {
        this.episode.charactersInfo = response.map(x => <CharacterInfo>{ name : x.name, image : x.image });
      },(error : HttpErrorResponse) =>{

      });
    }
  }

}
