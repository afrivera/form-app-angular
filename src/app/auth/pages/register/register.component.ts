import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  // TODO: temporal
  namePattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}";


  myForm: FormGroup = this.fb.group({
    name: [ , [ Validators.required, Validators.pattern( this.namePattern ) ]],
    email: [ , [ Validators.required, Validators.pattern( this.emailPattern )]]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Andres Felipe',
      email: 'test@test.com'
    })
  }

  invalidField( field: string ){
    return this.myForm.get( field )?.invalid
            && this.myForm.get( field )?.touched
  }

  saveForm(){
    console.log( this.myForm.value );
    this.myForm.markAllAsTouched();
  }

}
