import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { element } from '@angular/core/src/render3';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  name : string ;
  price : number ;
  status : string ;
  description : string ;

  prd ;
  id ;
  bill = {
    cart : [],
    customerId : '',
    customerName : '',
    totalAmount : 0 ,
  }
  user ;
  total = 0 ;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.showData();
  }
  
  value ;
  newValue ;


  showData(){
    this.newValue = this.api.cart;
    let length = this.newValue.length;
    for(let i=0 ; i<length ; i++){
      this.total = this.total + this.newValue.price;
    }
  }

  removeItem(item){
     console.log(item);
     let prdid = item.id ;
     console.log(prdid);
     console.log('item removed');
     let index = this.api.cart.findIndex(element => element.id == prdid);
     this.api.cart.splice(index,1);
     localStorage.setItem("cart", JSON.stringify(this.api.cart));
  }

  createbill(){
     let id = localStorage.getItem('uid');
     this.api.getUser(id).subscribe(res => {
       this.user = res ;
       let bill = {
        cart : this.api.cart,
        customerId : localStorage.getItem('uid'),
        customerName : this.user.name,
        totalAmount : this.total
      }
      console.log("Customer Name : ***");
 
      this.api.createBill(bill).then(res => {
        console.log('Bill Created');
      })
     });
    
  }

}
