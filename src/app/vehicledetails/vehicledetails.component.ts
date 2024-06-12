import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent implements OnInit {
  public vehicle:any={};
  public id:string="";


  constructor( private _activatedRoute:ActivatedRoute ,private _vehicleService:VehicleService) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _vehicleService.getvehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          }
        )

      }
    )
   }

  ngOnInit(): void {
  }

}
