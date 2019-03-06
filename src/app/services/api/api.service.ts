import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afs : AngularFirestore) { }

// crud of users //

  createUser(uid,data){

    return this.afs.doc('user/' +uid).set(data);
   
     }
     readUsers(){
       return this.afs.collection('user').snapshotChanges();
     }
     readSpecificUser(uid){
       return this.afs.doc('user/' + uid).valueChanges();
     }
     updateUser(uid,data){
   
       return this.afs.doc('user/' + uid).update(data);
     }
     deleteUser(uid){
       return this.afs.doc( 'user/'+ uid).delete();
     }
     getUser(uid){
       return this.afs.doc('user/'+ uid).valueChanges();
     }
   
   // crud of product=============
   createProduct(data){
   
     let a=this.afs.collection('products').add(data);
     return a;
      }
      readProducts(){
        return this.afs.collection('products').snapshotChanges();
      }
      readSpecificProduct(uid){
        return this.afs.doc('products/' + uid).valueChanges();
      }
      updateProduct(uid,data){
    
        return this.afs.doc('products/' + uid).update(data);
      }
      deleteProduct(uid){
        return this.afs.doc( 'products/'+ uid).delete();
      }
   cart = [];
   
   // crud of bill //

   createBill(data){
   
    let a=this.afs.collection('bill').add(data);
    return a;
     }
     readBill(){
       return this.afs.collection('bill').snapshotChanges();
     }
     updateBill(uid,data){
   
       return this.afs.doc('bill/' + uid).update(data);
     }
     deleteBill(uid){
       return this.afs.doc('bill/'+ uid).delete();
     }
     getUserBill(id){
       return this.afs.collection('bill', data => data.where('customerId', '==' , id) ).valueChanges() ;
     }
}
