import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/services/api/api.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bil ;
  constructor(private api : ApiService) { }

  ngOnInit() {
    this.getBill();
  }
  getBill(){

    this.api.readBill().pipe(map(list => list.map(item => {
      let data = item.payload.doc.data();
      let id = item.payload.doc.id;
      return { id, ...data };
    }))).subscribe(res => {
      this.bil = res;
      console.log(res);
    })
  
  }
}
