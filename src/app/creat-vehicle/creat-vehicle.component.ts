import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-creat-vehicle',
  templateUrl: './creat-vehicle.component.html',
  styleUrls: ['./creat-vehicle.component.css']
})
export class CreatVehicleComponent implements OnInit {


  public vehicleForm:FormGroup= new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl(),
  })

  constructor(private _VehicleService:VehicleService) { }

  ngOnInit(): void {
  }
  create(){
    console.log(this.vehicleForm.value);
    this._VehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Created Successfully")
      },
      (err:any)=>{
        alert("Creation Failed")
      }
    )
  }



}
