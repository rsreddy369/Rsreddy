import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankaccountService } from '../bankaccount.service';
import { BankaccountsComponent } from '../bankaccounts/bankaccounts.component';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {
  public account:any={};
  public id:string="";

  constructor(private _activatedRoute:ActivatedRoute,private _accountService:BankaccountService) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _accountService.getaccount(data.id).subscribe(
          (data:any)=>{
            this.account=data;
          }
        )

      }
    )
   }


  ngOnInit(): void {
  }

}
