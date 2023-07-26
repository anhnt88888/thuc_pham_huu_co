import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTopRateComponent } from './product-top-rate.component';

describe('ProductTopRateComponent', () => {
  let component: ProductTopRateComponent;
  let fixture: ComponentFixture<ProductTopRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTopRateComponent]
    });
    fixture = TestBed.createComponent(ProductTopRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
