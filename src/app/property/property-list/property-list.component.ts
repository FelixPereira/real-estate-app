import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../iproperty';
import { ActivatedRoute } from '@angular/router';
import { PropertyBase } from 'src/app/model/propertybase.model';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  sellRent = 1;
  properties: Array<PropertyBase> | undefined;

  constructor(
    private housingService: HousingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.sellRent = 2;
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(
      (data) => {
        this.properties = data;
      },
      (error) => console.log(error)
    );
  }
}
