import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTagSelectComponent } from './product-tag-select.component';

describe('ProductTagSelectComponent', () => {
  let component: ProductTagSelectComponent;
  let fixture: ComponentFixture<ProductTagSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTagSelectComponent]
    });
    fixture = TestBed.createComponent(ProductTagSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
