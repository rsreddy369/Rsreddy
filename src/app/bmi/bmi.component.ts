import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  public height:number=0;
  public weight:number=0;
  public result:number=0;
  public over:string=""

  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    this.result=Math.round(this.weight/((this.height/100)*(this.height/100)))

    if(this.result<=18.5){
      this.over="(Under weight)"
    }

    else if(this.result<25 && this.result>18.5){
      this.over="(Normal weight)"
    }
    else if(this.result<30 && this.result>=25)
      {
        this.over="(Over weight)"
      }

      else if(this.result<35 && this.result>=30){
        this.over="(Obese)"
      }

      else  if(this.result<40 && this.result>=35){
        this.over="(Extremely Obese)"
      } 
      else {
        this.over="(enter valies input)"
      }



  }

}
