import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    old_price: [0],
    image: [''],
    description: [''],
    sale: [''],
  });
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = String(params.get('id'));
      this.productService.getProductById(id).subscribe(
        (data) => {
          this.product = data;
          this.productForm.patchValue({
            name: data.name,
            price: data.price,
            old_price: data.old_price,
            image: data.image,
            description: data.description,
            sale: data.sale,
          });
        },
        (error) => console.log(error.message)
      );
    });
  }
  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        old_price: this.productForm.value.old_price || 0,
        image: this.productForm.value.image || '',
        description: this.productForm.value.description || '',
        sale: this.productForm.value.sale || '',
      };
      console.log(product);
      this.productService.updateProduct(product).subscribe((product) => {
        alert(`Cap nhat san pham thanh cong: ${product.name}`);
        this.router.navigate(['/admin']);
      });
    }
  }
}
