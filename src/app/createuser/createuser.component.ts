import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    age: new FormControl(null,[Validators.required,Validators.min(1),Validators.max(999)]),
    phone: new FormControl(null,[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    address: new FormGroup({
      hno: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
      city: new FormControl(null,[Validators.required]),
      pincode: new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    type: new FormControl(),
    // busfee: new FormControl(),
    // hostelfee: new FormControl(),
    cards: new FormArray([])
  })
  get cardsFormArray() {
    return this.userForm.get('cards') as FormArray;
  }
  addcard() {
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(null,[Validators.required,Validators.min(1000000000000000),Validators.max(9999999999999999)]),
        expiry: new FormControl(),
        cvv: new FormControl(),
      })
    )
  }
  deletecard(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor() {
    this.userForm.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'Dayscholer') {
          this.userForm.addControl('busfee', new FormControl());
          this.userForm.removeControl('hostelfee');
        }
        else if (data == 'Residential') {
          this.userForm.addControl('hostelfee', new FormControl());
          this.userForm.removeControl('busfee');
        }


      }
    )
  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.userForm.value);
  }

}
