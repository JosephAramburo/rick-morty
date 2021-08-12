import { Component, Input, OnInit } from '@angular/core';
import { LocationItemInterface } from '@interfaces/location-item-interface';

@Component({
  selector: 'app-card-location',
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.css']
})
export class CardLocationComponent implements OnInit {
  @Input() locationItem : LocationItemInterface = {} as LocationItemInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
