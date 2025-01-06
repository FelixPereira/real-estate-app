import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../iproperty';
import { PropertyBase } from 'src/app/model/propertybase.model';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  @Input() property: PropertyBase | undefined;
  @Input() showIcons: boolean = true;

  constructor() {}

  ngOnInit(): void {
  }
}
