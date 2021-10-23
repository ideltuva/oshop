import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UsernameComponent } from './username/username.component';
import { HomeComponent } from './home/home.component';
import { environment } from './../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { LoginActivateService } from './services/login-activate.service';
import { LoggedInActivateService } from './services/logged-in-activate.service';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    UsernameComponent,
    HomeComponent,
    BsNavbarComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: HomeComponent, 
        canActivate: [LoginActivateService] 
      },
      { 
        path: 'products',
        component: ProductsComponent,
        canActivate: [LoginActivateService] 
      },
      { 
        path: 'shopping-cart',
        component: ShoppingCartComponent,
        canActivate: [LoginActivateService] 
      },
      { 
        path: 'check-out', 
        component: CheckOutComponent, 
        canActivate: [LoginActivateService] 
      },
      { 
        path: 'order-success', 
        component: OrderSuccessComponent, 
        canActivate: [LoginActivateService] 
      },
      { 
        path: 'login', 
        component: LoginComponent,
        canActivate: [LoggedInActivateService]
      },
      { 
        path: 'my/orders',
        component: MyOrdersComponent, 
        canActivate: [LoginActivateService] 
      },
      { 
        path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [LoginActivateService] 
      },
      { 
        path: 'admin/orders',
        component: AdminProductsComponent,
        canActivate: [LoginActivateService]
      }
    ])
  ],
  providers: [
    LoginActivateService, 
    LoggedInActivateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
