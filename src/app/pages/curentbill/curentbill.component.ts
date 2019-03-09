import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-curentbill',
  templateUrl: './curentbill.component.html',
  styleUrls: ['./curentbill.component.css']
})
export class CurentbillComponent implements OnInit {

  cb ;
  total: number = 0;

  constructor() { }

  ngOnInit() {
    this.myCurrentBill();
  }

  myCurrentBill(){
   let str = localStorage.getItem('cart');
   this.cb = JSON.parse(str);
   console.log(this.cb);
  }
  totalPrice() {


    let x = JSON.parse(localStorage.getItem('cart'));

    let len = x.length;


    for (var i = 0; i < len; i++) {
      let y = parseInt(x[i].price);
      this.total = (y + this.total);
    }
}
}