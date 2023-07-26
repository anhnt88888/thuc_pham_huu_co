import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopDetailComponent } from './pages/shop-detail/shop-detail.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { ProductCreateComponent } from './pages/admin/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  // user
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'product-detail/:id', component: ShopDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
  },
  { path: 'admin/product-create', component: ProductCreateComponent },
  { path: 'admin/product-update/:id', component: ProductUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
