import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanCategoryComponent } from './lean-category.component';

describe('LeanCategoryComponent', () => {
  let component: LeanCategoryComponent;
  let fixture: ComponentFixture<LeanCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeanCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
