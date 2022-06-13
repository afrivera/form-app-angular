import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

// import { canNotBeStrider, emailPattern, namePattern } from 'src/app/shared/validators/validators';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {


  myForm: FormGroup = this.fb.group({
    name: [ , [ Validators.required, Validators.pattern( this.vS.namePattern ) ]],
    email: [ , [ Validators.required, Validators.pattern( this.vS.emailPattern )], [ this.eVS ]],
    username: [ , [ Validators.required , this.vS.canNotBeStrider ]],
    password: [ , [ Validators.required, Validators.minLength(6) ]],
    validPassword: [ , [ Validators.required ]]
  }, {
    validators: [ this.vS.sameFields( 'password', 'validPassword')]
  })

  get emailErrorMsg():string{
    const errors = this.myForm.get('email')?.errors;
    if(errors?.['required']){
      return 'email is required';
    } else if( errors?.['pattern']){
      return 'email no valid'
    } else if( errors?.['emailExist']){
      return 'email already exist'
    }

    return '';
  }

  constructor(
     private fb: FormBuilder,
     private vS: ValidatorService,
     private eVS: EmailValidatorService,
    ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Andres Felipe',
      email: 'test1@test.com',
      username: 'afrivera',
      password: '123456',
      validPassword: '123456',
    })
  }

  invalidField( field: string ){
    return this.myForm.get( field )?.invalid
            && this.myForm.get( field )?.touched
  }



  // emailRequired(){
  //   return this.myForm?.get( 'email' )?.errors?.['required']
  //     && this.myForm.get( 'email' )?.touched
  // }

  // emailFormat(){
  //   return this.myForm?.get( 'email' )?.errors?.['pattern']
  //     && this.myForm.get( 'email' )?.touched
  // }

  // emailExist(){
  //   return this.myForm?.get( 'email' )?.errors?.['emailExist']
  //     && this.myForm.get( 'email' )?.touched
  // }

  saveForm(): void{
    console.log( this.myForm.value );
    this.myForm.markAllAsTouched();
  }

}
