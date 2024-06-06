import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankaccountService {

  constructor(private _httpClient:HttpClient) { }

  getaccounts():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page=1");
  }
  
  getFilterdaccounts(term:string):Observable<any>{
    return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }

  getpagedaccounts(page:number):Observable<any>{
    return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page="+page);
  }

  getsortaccounts(column:string,order:string):Observable<any>{
    return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortby="+column+"&order="+order+"&limit=10&page=1");
  }

  deleteaccounts(id:string){
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }
}


