import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class PaymentService {

  userId: string;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      if (auth) this.userId = auth.uid
    });
  }


   processPayment(token: any, amount: number) {
     const payment = { token, amount }
     return this.db.collection(`payments`).doc(`${this.userId}`).set(payment)
   }

}