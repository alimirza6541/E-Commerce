import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/services/api/api.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  prd ;
  item ;
  constructor(private api : ApiService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    
    this.api.readProducts().pipe(map(list => list.map(item => {
      let data = item.payload.doc.data();
      let id = item.payload.doc.id;
      return { id, ...data };
    }))).subscribe(res => {
      this.prd = res;
      console.log(res);
    })
  
  }
  onclick(item){
    console.log(item)
     this.api.cart.push(item);
     localStorage.setItem('cart', JSON.stringify(this.api.cart)) ;
     console.log(this.api.cart);
     console.log('Item Addded');

  }

}
