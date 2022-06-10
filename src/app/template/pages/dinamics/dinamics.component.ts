import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  // @ViewChild('myForm') myForm!: NgForm;
  newGame: string='';
  person: Person = {
    name: 'Andres',
    favorites: [
      {id: 1, name: 'Metal Gear'},
      {id: 2, name: 'Resident Evil'}
    ]
  }
  
  addGame(){
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    }
    this.person.favorites.push( {...newFavorite} );
    this.newGame = '';
  }
  
  delete( id: number ){
    this.person.favorites.splice( id, 1 );
  }
  
  save(){
    console.log('post')
  }
}
