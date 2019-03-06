import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-mybill',
  templateUrl: './mybill.component.html',
  styleUrls: ['./mybill.component.css']
})
export class MybillComponent implements OnInit {
bill ;
  constructor(private api : ApiService) { }

  ngOnInit() {
    this.myBill();
  }

  myBill(){
    let id = localStorage.getItem('uid');
    this.api.getUserBill(id).subscribe(res => {
      console.log(res);
      this.bill = res ;
      
    })
  }
}
