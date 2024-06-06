import { Component, OnInit } from '@angular/core';
import { BankaccountService } from '../bankaccount.service';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent implements OnInit {
  public accounts:any=[];
  public search:any="";
  public page:number=1;
  public column:string="";
  public order:string="";

  constructor(private _accountService:BankaccountService) { 
    _accountService.getaccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    );

  }

  ngOnInit(): void {
  }
  filter(){
    this._accountService.getFilterdaccounts(this.search).subscribe(
     (data:any)=>{
       this.accounts=data;
     },
     (err:any)=>{
       console.log("Internal Server Error")
     }
    
   )
 }
 pagenation(){
   this._accountService.getpagedaccounts(this.page).subscribe(
     (data:any)=>{
       this.accounts=data;
     },
     (err:any)=>{
       console.log("Internal Server Error")
     }
   )
 }
 sort(){
   this._accountService.getsortaccounts(this.column,this.order).subscribe(
     (data:any)=>{
       this.accounts=data;
     },
     (err:any)=>{
       console.log("Internal Server Error")
     }
   )
 }
 delete(id:string){
   this._accountService.deleteaccounts(id).subscribe(
     (data:any)=>{
       alert("Deleted Successfully");
     },
     (err:any)=>{
       alert("Internal server error");
     }
   )
 }
 

}
