import { Component } from '@angular/core';


interface MenutItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
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
  ];

  authMenu: MenutItem[] = [
    {
      text: 'Register',
      route: 'register'
    },
    {
      text: 'Login',
      route: 'login'
    }
  ]



}
