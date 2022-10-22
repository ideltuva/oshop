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
import { AuthGuard } from './services/auth-guard.service';
import { AdminGuard } from './services/admin-guard.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
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
        component: HomeComponent
      },
      { 
        path: 'products',
        component: ProductsComponent
      },
      { 
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      { 
        path: 'login', 
        component: LoginComponent
      },

      { 
        path: 'check-out', 
        component: CheckOutComponent, 
        canActivate: [AuthGuard] 
      },
      { 
        path: 'order-success', 
        component: OrderSuccessComponent, 
        canActivate: [AuthGuard] 
      },

      { 
        path: 'my/orders',
        component: MyOrdersComponent, 
        canActivate: [AuthGuard] 
      },
      { 
        path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [AuthGuard, AdminGuard] 
      },
      { 
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminGuard]
      }
    ])
  ],
  providers: [
    AuthGuard,
    AuthService,
    AdminGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
