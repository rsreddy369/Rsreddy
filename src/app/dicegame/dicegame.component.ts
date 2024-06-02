import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dicegame',
  templateUrl: './dicegame.component.html',
  styleUrls: ['./dicegame.component.css']
})
export class DicegameComponent implements OnInit {
  public number:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  roll(){
    this.number=Math.floor(Math.random() * 6) + 1;
  }

}
