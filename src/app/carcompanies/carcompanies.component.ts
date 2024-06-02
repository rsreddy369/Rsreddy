import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carcompanies',
  templateUrl: './carcompanies.component.html',
  styleUrls: ['./carcompanies.component.css']
})
export class CarcompaniesComponent implements OnInit {
  public company:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
