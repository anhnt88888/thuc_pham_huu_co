import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogReviewsComponent } from './blog-reviews.component';

describe('BlogReviewsComponent', () => {
  let component: BlogReviewsComponent;
  let fixture: ComponentFixture<BlogReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogReviewsComponent]
    });
    fixture = TestBed.createComponent(BlogReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
