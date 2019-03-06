import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afth : AngularFireAuth) { }
  login(Email,Password){
    return this.afth.auth.signInWithEmailAndPassword(Email,Password);
  }
  signup(Email,Password){
    return this.afth.auth.createUserWithEmailAndPassword(Email,Password);
      }
  isLogedIn(){
    let res ;
    res = this.afth.auth.currentUser;
    return res ;
  }
}
