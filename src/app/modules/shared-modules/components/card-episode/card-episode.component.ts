import { Component, Input, OnInit } from '@angular/core';
import { EpisodeInterface } from '@interfaces/episode-interface';

@Component({
  selector: 'app-card-episode',
  templateUrl: './card-episode.component.html',
  styleUrls: ['./card-episode.component.css']
})
export class CardEpisodeComponent implements OnInit {
  @Input() episode : EpisodeInterface = {} as EpisodeInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
