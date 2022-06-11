import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  
  // myForm: FormGroup = new FormGroup({
  //   'productName' : new FormControl('RTX 408ti'),
  //   'productPrice': new FormControl(1500),
  //   'productStock': new FormControl(5)
  // });

  myForm: FormGroup =  this.fb.group({
    productName : [ , [Validators.required, Validators.minLength(3) ]],
    productPrice: [ , [ Validators.required,  Validators.min(0)]],
    productStock: [ , [ Validators.required,  Validators.min(0)]],
  })
  
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
      this.myForm.reset({
        'productName' : 'RTX 408ti',
        'productPrice': 1500
      })
  }

  invalidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  save(){
    if( this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return
    }
    console.log(this.myForm.value)

    this.myForm.reset();
  }

}
