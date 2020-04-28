import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCategoryMenuComponent } from './course-category-menu.component';

describe('CourseCategoryMenuComponent', () => {
  let component: CourseCategoryMenuComponent;
  let fixture: ComponentFixture<CourseCategoryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCategoryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
