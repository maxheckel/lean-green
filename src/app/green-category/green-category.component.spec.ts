import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCategoryComponent } from './green-category.component';

describe('GreenCategoryComponent', () => {
  let component: GreenCategoryComponent;
  let fixture: ComponentFixture<GreenCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
