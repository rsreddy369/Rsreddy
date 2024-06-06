import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  public vehicles:any=[];
  public term:string="";
  public page:number=1;
  public column:string="";
  public order:string="";

  constructor(private _vehicleService:VehicleService) {

    _vehicleService.getvehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error");

      }
    );
   }

  ngOnInit(): void {
  }
  filter(){
   this._vehicleService.getFilterdvehicles(this.term).subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
      console.log("Internal Server Error")
    }
   
  )
}
pagenation(){
  this._vehicleService.getpagedvehicles(this.page).subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
      console.log("Internal Server Error")
    }
  )
}
sort(){
  this._vehicleService.getsortvehicles(this.column,this.order).subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
      console.log("Internal Server Error")
    }
  )
}
delete(id:string){
  this._vehicleService.deleteVehicle(id).subscribe(
    (data:any)=>{
      alert("Deleted Successfully");
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}

}
