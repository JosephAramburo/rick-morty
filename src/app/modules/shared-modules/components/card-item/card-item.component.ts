import { Component, OnInit, Input } from '@angular/core';
import { CardItemInterface } from '@interfaces/card-item-interface';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() character : CardItemInterface = {} as CardItemInterface;

  constructor() { }

  ngOnInit(): void {
  }

  setColorStatus(status : string): string[]{
    let statusArray : string[] = [ 'badge-secondary', 'text-secondary' ];

    switch(status){
      case 'Alive':
        statusArray = ['badge-success', 'text-success' ];
        break;
      case 'Dead':
        statusArray = ['badge-danger', 'text-danger' ];
        break;
    }

    return statusArray;
  }

}
