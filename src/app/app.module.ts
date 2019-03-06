import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SellerComponent } from './pages/seller/seller.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ProductsComponent } from './pages/products/products.component';
// firestore auth modules /////
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CartComponent } from './pages/cart/cart.component';
import { BillComponent } from './pages/bill/bill.component';
import { MybillComponent } from './pages/mybill/mybill.component';
import { CurentbillComponent } from './pages/curentbill/curentbill.component';
import { RoleGuardService } from './services/roleguard/roleguard.service';
import { AuthguardService } from './services/authguard/authguard.service';
import { MakePaymentComponent } from './pages/make-payment/make-payment.component';
import { PaymentService } from './services/payments/payment.service';
import { SpinnerComponent } from './pages/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SellerComponent,
    CustomerComponent,
    ProductsComponent,
    DashboardComponent,
    CartComponent,
    BillComponent,
    MybillComponent,
    CurentbillComponent,
    MakePaymentComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.fireConfig),
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'bill', component: BillComponent },
      { path: 'mybill', component: MybillComponent },
      { path: 'curentbill', component: CurentbillComponent },
      { path: 'make-payment', component: MakePaymentComponent },
      { path: 'spinner', component: SpinnerComponent },
      
      {
        path: 'seller', canActivate: [RoleGuardService],
        data: {
          expectedRole: 'Seller'
        },
        component: SellerComponent
      },

      {
        path: 'customer', canActivate: [RoleGuardService],
        data: {
          expectedRole: 'Customer'
        },
        component: CustomerComponent
      },
    ])
  ],
  providers: [RoleGuardService, AuthguardService, PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
