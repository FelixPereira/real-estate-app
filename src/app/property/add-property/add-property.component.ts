import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { PropertyBase } from 'src/app/model/propertybase.model';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form')
  addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Sem', 'Unfurnished'];

  propertyView: PropertyBase = {
    id: null,
    price: '',
    sellRent: null,
    pType: null,
    bhk: null,
    builtArea: null,
    city: null,
    fType: null,
    rtm: null,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
