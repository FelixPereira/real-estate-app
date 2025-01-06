import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PropertyBase } from '../model/propertybase.model';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties(sellRent: number) {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<PropertyBase> = [];

        for (const id in data) {
          // @ts-ignore
          if (data.hasOwnProperty(id) && data[id].sellRent == sellRent) {
            // @ts-ignore
            propertiesArray.push(data[id]);
          }
        }

        console.log(propertiesArray);

        return propertiesArray;
      })
    );
  }
}
