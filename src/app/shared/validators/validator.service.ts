import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public namePattern  : string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}";

  constructor() { }

  canNotBeStrider = ( control: FormControl ): ValidationErrors | null =>{
    const value = control.value?.trim().toLowerCase();
    // console.log(value)
    if( value === 'strider'){
      // error
      return {
        noStrider: true
      }
    }

    return null
  }

  sameFields( field1: string, field2: string){
    return ( fG: AbstractControl ): ValidationErrors | null=> {

      const pass1 = fG.get(field1)?.value;
      const pass2 = fG.get(field2)?.value;

      if( pass1 !== pass2 ){
        fG.get(field2)?.setErrors({ noSame: true })
        return  {
          noSame: true
        }
      }

      // fG.get(field2)?.setErrors({ noSame: true })

      return null;
    }
  }
}
