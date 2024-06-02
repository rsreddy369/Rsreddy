import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcompaniesComponent } from './carcompanies.component';

describe('CarcompaniesComponent', () => {
  let component: CarcompaniesComponent;
  let fixture: ComponentFixture<CarcompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarcompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarcompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
