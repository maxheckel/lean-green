import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenFoodComponent } from './green-food.component';

describe('GreenFoodComponent', () => {
  let component: GreenFoodComponent;
  let fixture: ComponentFixture<GreenFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
