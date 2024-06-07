import { Component, OnInit } from '@angular/core';
import { BankaccountService } from '../bankaccount.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public bankaccountForm:FormGroup= new FormGroup({
    account_name: new FormControl(),
    account_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profile_picture: new FormControl(),
  })

  constructor(private _BankAccountService:BankaccountService) { }

  ngOnInit(): void {
  }
  create(){
    console.log(this.bankaccountForm.value);
    this._BankAccountService.createbankaccount(this.bankaccountForm.value).subscribe(
      (data:any)=>{
        alert("Created Successfully")
      },
      (err:any)=>{
        alert("Creation Failed")
      }
    )
  }

}
