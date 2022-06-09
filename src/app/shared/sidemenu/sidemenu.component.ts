import { Component } from '@angular/core';


interface MenutItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent  {

  templateMenu: MenutItem[] = [
    {
      text: 'Basics',
      route: 'basics'
    },
    {
      text: 'Dinamics',
      route: 'dinamics'
    },
    {
      text: 'Switchs',
      route: 'switchs'
    },
  ]

}
