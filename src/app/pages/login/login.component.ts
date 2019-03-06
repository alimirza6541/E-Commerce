import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router}from '@angular/router';
import {ApiService} from 'src/app/services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username : string ;
  Password : string ;
  usertype : string ;
  uid ;
  obj ;
  isLoading : boolean ;

  constructor(private auth:AuthService , private router:Router , private api : ApiService) { }

  ngOnInit() {
  }
  login(){
    this.isLoading = true ;
    this.auth.login(this.Username,this.Password).then(res=>{
      this.uid = res.user.uid ;
     console.log(res.user.uid);
     this.api.getUser(this.uid).subscribe(res => {
       console.log(res);
       this.obj = res ;
       this.isLoading = false ;
       if(this.obj.usertype == 'Seller'){
         console.log('It is Seller');
         localStorage.setItem('uid',this.uid);
         localStorage.setItem('type',this.obj.usertype);

         this.router.navigate(['/seller']);
       }
       else {
        console.log('It is Customer');
        localStorage.setItem('uid',this.uid);
        localStorage.setItem('type',this.obj.usertype);
        console.log(this.uid);
        
        this.router.navigate(['/customer']);
       }
     }) 

  })
  }
}
