import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { QuickViewModalComponent } from './components/quick-view-modal/quick-view-modal.component';
import { AddToCardModalComponent } from './components/add-to-card-modal/add-to-card-modal.component';
import { WishlistModalComponent } from './components/wishlist-modal/wishlist-modal.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopDetailComponent } from './pages/shop-detail/shop-detail.component';
import { CartMenuComponent } from './components/cart-menu/cart-menu.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { BannerHeaderComponent } from './components/banner-header/banner-header.component';
import { FeatureComponent } from './components/feature/feature.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SliderComponent } from './components/slider/slider.component';
import { BannerComponent } from './components/banner/banner.component';
import { OurProductComponent } from './components/our-product/our-product.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { VideoComponent } from './components/video/video.component';
import { FeedBacksComponent } from './components/feed-backs/feed-backs.component';
import { BlogReviewsComponent } from './components/blog-reviews/blog-reviews.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { Feature6Component } from './components/feature6/feature6.component';
import { TeamComponent } from './components/team/team.component';
import { ContainerComponent } from './components/container/container.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductfilterPriceComponent } from './components/productfilter-price/productfilter-price.component';
import { ProductTopRateComponent } from './components/product-top-rate/product-top-rate.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductTagSelectComponent } from './components/product-tag-select/product-tag-select.component';
import { ProductSizeFilterComponent } from './components/product-size-filter/product-size-filter.component';
import { ProductColorFilterComponent } from './components/product-color-filter/product-color-filter.component';
import { BannerAdsComponent } from './components/banner-ads/banner-ads.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductRelatedComponent } from './components/product-related/product-related.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { FeatureProductComponent } from './components/feature-product/feature-product.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { ProductCreateComponent } from './pages/admin/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PreloaderComponent,
    QuickViewModalComponent,
    AddToCardModalComponent,
    WishlistModalComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    ShopDetailComponent,
    CartMenuComponent,
    MobileMenuComponent,
    BannerHeaderComponent,
    FeatureComponent,
    BlogDetailComponent,
    NotFoundPageComponent,
    CheckoutComponent,
    SliderComponent,
    BannerComponent,
    OurProductComponent,
    CountDownComponent,
    VideoComponent,
    FeedBacksComponent,
    BlogReviewsComponent,
    BlogPageComponent,
    InboxComponent,
    QuestionsComponent,
    Feature6Component,
    TeamComponent,
    ContainerComponent,
    LeftComponent,
    RightComponent,
    ProductCategoriesComponent,
    ProductfilterPriceComponent,
    ProductTopRateComponent,
    ProductSearchComponent,
    ProductTagSelectComponent,
    ProductSizeFilterComponent,
    ProductColorFilterComponent,
    BannerAdsComponent,
    ProductDetailComponent,
    ProductRelatedComponent,
    FeatureProductComponent,
    LayoutAdminComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
