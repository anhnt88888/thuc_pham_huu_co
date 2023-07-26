import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfilterPriceComponent } from './productfilter-price.component';

describe('ProductfilterPriceComponent', () => {
  let component: ProductfilterPriceComponent;
  let fixture: ComponentFixture<ProductfilterPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductfilterPriceComponent]
    });
    fixture = TestBed.createComponent(ProductfilterPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
