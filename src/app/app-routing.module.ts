import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventComponent } from './event/event.component';
import { StudentsComponent } from './students/students.component';
import { PipesComponent } from './pipes/pipes.component';
import { CarcompaniesComponent } from './carcompanies/carcompanies.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { DicegameComponent } from './dicegame/dicegame.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { CreatVehicleComponent } from './creat-vehicle/creat-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'welcome',component:WelcomeComponent},
    {path:'home',component:HomeComponent},
    {path:'databinding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'event',component:EventComponent},
    {path:'students',component:StudentsComponent},
    {path:'carcompanies',component:CarcompaniesComponent},
    {path:'pipes',component:PipesComponent},
    {path:'shopping',component:ShoppingComponent},
    {path:'dicegame',component:DicegameComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'bankaccounts',component:BankaccountsComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'createvehicle',component:CreatVehicleComponent},
    {path:'createaccount',component:CreateAccountComponent},
    
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
