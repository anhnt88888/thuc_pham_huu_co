import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    old_price: [0],
    image: [''],
    description: [''],
    sale: [0],
  });
  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}
  onHandleSubmit() {
    const product: IProduct = {
      id: '',
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      old_price: this.productForm.value.old_price,
      image: this.productForm.value.image,
      description: this.productForm.value.description,
      sale: this.productForm.value.sale,
    };
    this.productService.addProduct(product).subscribe((product) => {
      console.log(product);
      alert(`Them san pham thanh cong: ${product.name}`);
      this.router.navigate(['/admin']);
    });
  }
}
