import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styles: [
  ]
})
export class SwitchsComponent {
  
  person = {
    gender: '',
    notifications: true
  }

  termsAndConditions: boolean = false;
  

}
