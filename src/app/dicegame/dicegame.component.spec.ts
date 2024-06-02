import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicegameComponent } from './dicegame.component';

describe('DicegameComponent', () => {
  let component: DicegameComponent;
  let fixture: ComponentFixture<DicegameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicegameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicegameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
