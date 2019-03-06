import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    Username :'' ,
    Password :'' ,
    Email :'',
    usertype : ''
  };
  responce;

  constructor(private auth : AuthService , private api : ApiService) { }

  ngOnInit() {
  }
  createUser(){
    this.auth.signup(this.user.Email,this.user.Password).then(res=>{
      console.log('user Authenticate');
this.responce=res;
      let id= this.responce.user.uid;
  let data={
    name:this.user.Username,
    password:this.user.Password,
    email:this.user.Email,
    usertype:this.user.usertype 
  }
  this.api.createUser(id,data).then(res=>{
    console.log("user created");
    })
  });
}
}
