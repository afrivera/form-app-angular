import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    personName: [  , [ Validators.required, Validators.minLength(3) ] ],
    favorites: this.fb.array( [
      ['metal Gear', Validators.required ],
      ['Resident Evil', Validators.required ],
    ], Validators.required )
  });

  newFavorite: FormControl = this.fb.control('' , Validators.required );

  get favoritesArr(){
    return this.myForm.get('favorites') as FormArray;
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  invalidField(){
    return this.myForm.controls['personName']?.errors && this.myForm.controls['personName']?.touched ;
  }

  addFavorite(){
    if( this.newFavorite.invalid ){ return ;}

    this.favoritesArr.push( this.fb.control( this.newFavorite.value, Validators.required ));
    // this.favoritesArr.push( new FormControl( this.newFavorite.value, Validators.required ));
    this.newFavorite.reset()
  }

  deleteFavorite( id: number){
    this.favoritesArr.removeAt(id);
  }

  save(){
    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset();
  }

}
