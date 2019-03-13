import { Component, OnInit } from '@angular/core';
import{ DataSource, BillItems } from '../../source/data/dataSource';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'LIS-bill-information-page',
  templateUrl: './bill-information-page.component.html',
  styleUrls: ['./bill-information-page.component.scss']
})
export class BillInformationPageComponent implements OnInit {

  constructor( private activeRoute: ActivatedRoute ) { }
  
  billNo: string = '';
  billItems: BillItems[];
  dataSource: DataSource  = new DataSource();

  ngOnInit() {

    this.activeRoute.params.subscribe( param=>{ 
      //console.log('param', param);
      this.billNo = param['id'];
      this.billItems =  this.dataSource.billSearchResult.filter(bill => bill.bill === this.billNo);
  });



  }

}
