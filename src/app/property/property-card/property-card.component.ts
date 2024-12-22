import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  property: any = {
    id: 12,
    name: "Felix's house",
    type: 'House',
    price: 12000,
  };

  constructor() {}

  ngOnInit(): void {}
}
