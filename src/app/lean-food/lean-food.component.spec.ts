import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanFoodComponent } from './lean-food.component';

describe('LeanFoodComponent', () => {
  let component: LeanFoodComponent;
  let fixture: ComponentFixture<LeanFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeanFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
