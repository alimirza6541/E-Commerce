import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curentbill',
  templateUrl: './curentbill.component.html',
  styleUrls: ['./curentbill.component.css']
})
export class CurentbillComponent implements OnInit {

  cb ;

  constructor() { }

  ngOnInit() {
    this.myCurrentBill();
  }

  myCurrentBill(){
   let str = localStorage.getItem('cart');
   this.cb = JSON.parse(str);
   console.log(this.cb);
  }
}
