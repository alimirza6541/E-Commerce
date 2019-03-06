import { Component, OnInit, HostListener } from '@angular/core';

import { environment } from '../../../environments/environment';
import { PaymentService } from 'src/app/services/payments/payment.service';
import { StripeCheckout } from 'src/global';

@Component({
  selector: 'make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {

  handler: any;
  amount = 500;
  constructor(private payment: PaymentService ) { }

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'assets/logo/logo.png',
      locale: 'auto',
      token: token => {
        this.payment.processPayment(token, this.amount )
      }
    });
    this.handlePayment();
  }

  handlePayment() {
    this.handler.open({
      name: 'FireStarter',
      excerpt: 'Deposit Funds to Account',
      amount: this.amount
    });
  }

  @HostListener('window:popstate')
    onPopstate() {
      this.handler.close()
    }

}