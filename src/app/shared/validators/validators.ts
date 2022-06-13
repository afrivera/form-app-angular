import { FormControl } from "@angular/forms";


// TODO: temporal
export const namePattern  : string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}";

export const canNotBeStrider = ( control: FormControl )=>{
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