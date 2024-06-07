import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventComponent } from './event/event.component';
import { StudentsComponent } from './students/students.component';
import { PipesComponent } from './pipes/pipes.component';
import { BalancePipe } from './balance.pipe';
import { CarcompaniesComponent } from './carcompanies/carcompanies.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { DicegameComponent } from './dicegame/dicegame.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { CreatVehicleComponent } from './creat-vehicle/creat-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    WelcomeComponent,
    HomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DirectivesComponent,
    EventComponent,
    StudentsComponent,
    PipesComponent,
    BalancePipe,
    CarcompaniesComponent,
    ShoppingComponent,
    DicegameComponent,
    VehiclesComponent,
    BankaccountsComponent,
    FlipkartComponent,
    CreatVehicleComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
