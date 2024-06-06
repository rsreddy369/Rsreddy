import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }

  getvehicles():Observable<any>{
    return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1");
  }

  getFilterdvehicles(term:string):Observable<any>{
    return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }

  getpagedvehicles(page:number):Observable<any>{
    return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+page);
  }

  getsortvehicles(column:string,order:string):Observable<any>{
    return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortby="+column+"&order="+order+"&limit=10&page=1");
  }

  deleteVehicle(id:string){
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }
}
