import { Component, Input, OnInit } from '@angular/core';
import { EpisodeInterface } from '@interfaces/episode-interface';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeDetailComponent } from '../Modals/episode-detail/episode-detail.component';

@Component({
  selector: 'app-card-episode',
  templateUrl: './card-episode.component.html',
  styleUrls: ['./card-episode.component.css']
})
export class CardEpisodeComponent implements OnInit {
  @Input() episode : EpisodeInterface = {} as EpisodeInterface;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  showDetail(){
    let modal : NgbModalRef         = this.modalService.open(EpisodeDetailComponent);
    modal.componentInstance.episode = this.episode;

    modal.result.then(() => {

    }).catch(() => {

    });
  }
}
