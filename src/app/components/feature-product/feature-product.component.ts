import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-feature-product',
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.css']
})
export class FeatureProductComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );
  }
}
