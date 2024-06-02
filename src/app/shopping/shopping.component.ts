import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  public product:number=0;
  public productname:string='';
  public price:number=0;
  public rating:number=0;
  public isFreeDelivary:boolean=false;

  public products:any[]=[
    {sno:'1',productname:"pen",price:10,rating:'3',freedelivary:true},
    {sno:'2',productname:"phone",price:100,rating:'2',freedelivary:false},
    {sno:'3',productname:"shirt",price:400,rating:'4',freedelivary:true},
    {sno:'4',productname:"cap",price:200,rating:'5',freedelivary:false},
    {sno:'5',productname:"mobile case",price:300,rating:'2',freedelivary:true},
    {sno:'6',productname:"remote",price:400,rating:'2.5',freedelivary:  false},
  ]

  constructor() { }

  ngOnInit(): void {
  }
  delete(i:number){
    this.products.splice(i,1)
  }
  pltoh(){
    this.products=this.products.sort((a:any,b:any)=>a.price-b.price);

  }
  phtol(){
    this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
  }
  rltoh(){
    this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating);

  }
  rhtol(){
    this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating);

  }
  adis(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price*0.5;
      return product;
    })
  }

  pwdc(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price+50;
      return product;
    })
  }
  atc(){
let product:any={
  productname:this.productname,
  price:this.price,
  rating:this.rating,
}
this.products.push(product);
this.productname='';
this.price=0;
this.rating=0;
  }

  tp(){
    let totalprice:number=0;
    totalprice=this.products.reduce((sum:number,product:any)=>sum+product.price,0);
    alert(totalprice);
  }
  tci(){
    let totalcartitems:number=0;
    totalcartitems=this.products.length;
    alert(totalcartitems);
  }
  


}
