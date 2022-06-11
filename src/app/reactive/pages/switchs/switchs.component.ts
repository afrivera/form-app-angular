import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styles: [
  ]
})
export class SwitchsComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required ],
    notifications: [ true, Validators.required ],
    conditions: [ false, Validators.requiredTrue ],
  })

  person = {
    gender: 'F',
    notifications: true
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset( {
      ...this.person,
      conditions: false
    } );

    // this.myForm.get('conditions')?.valueChanges.subscribe( newValue => {
    //   console.log(newValue);
    // });

    this.myForm.valueChanges.subscribe( ({conditions, ...form}) => {
      // delete form.conditions;
      // console.log(form);
      this.person = form;

    })
  }

  save(){
    const formValue = {...this.myForm.value};
    delete formValue.conditions
    // console.log(formValue);
    this.person = formValue;

  }


}
