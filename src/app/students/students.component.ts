import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public name:string='';
  public marks:number=0;
  public fee:number=0;

  public students:any=[
  {Name:'Rsreddy',Marks:60,Fee:50000},
  {Name:'Venkat',Marks:80,Fee:40000},
  {Name:'Ashok',Marks:70,Fee:30000},
  ]


  constructor() { }

  ngOnInit(): void {
  }
  register(){
  let student:any={
    Name:this.name,
    Marks:this.marks,
    Fee:this.fee,
}

this.students.push(student);
this.name='';
this.marks=0;
this.fee=0;
  }

  delete(i:number){
    this.students.splice(i,1);

  }
  pfee(){
    let totalfee:number=0;
      totalfee=this.students.reduce((sum:number,student:any)=>sum+student.Fee,0),
      alert(totalfee);
  }
  low(){
    this.students=this.students.sort((a:any,b:any)=>a.Marks-b.Marks);
  }
  high(){
    this.students=this.students.sort((a:any,b:any)=>b.Marks-a.Marks);
  }
  sal(){
    this.students=this.students.map((student:any)=>{
      student.Name='Mr.'+student.Name;
      return student;
  })
}

}