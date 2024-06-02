import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public names:string[]=[];
  public name:string='';
  public na:string='Mr/Ms:';

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    this.names.push(this.na+this.name);
    this.name="";
  }

  delete(i:number){
    this.names.splice(i,1);
  }
  deletelast(){
    this.names.pop();
  }
  deleteall(){
    this.names=[];
}
  atoz(){
    this.names=this.names.sort();
}
  ztoa(){
    this.names=this.names.sort().reverse();
  }
  salutation(){
    this.names=this.names.map(name=>`Mr. ${name}`);
  }
  salutation1(i:number){
    this.names[i]='MR.'+ this.names[i];
  }
  salutation2(i:number){
    this.names[i]='MS.'+this.names[i];
  }
}
