import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent {
  products: IProduct[] =[];
  constructor(private productService: ProductService){
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );
  }
  delete(id:string){
    if(confirm("Bạn có chắc chắn muốn xóa không?")){
      this.productService.deleteProduct(id).subscribe(() =>{
        this.products = this.products.filter((product) => product.id !== id);
      });
    }
  }
}
