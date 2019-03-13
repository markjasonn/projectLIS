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
  
  // billNo: string = '';
  // billItems: BillItems[];
  // dataSource: DataSource  = new DataSource();

  dataSource: DataSource  = new DataSource();
  billItem: BillItems;

  ngOnInit() {

    this.activeRoute.params.subscribe(param=>{ 
        // this.billNo = param['id'];
        // this.billItems =  this.dataSource.billSearchResult.filter(bill => bill.bill === this.billNo);
        // console.log("Filtered data: ");
        // console.log(this.billItems);

        let billNo: string = param['id'];
        let billItems: BillItems[] = this.dataSource.billSearchResult.filter(bill => bill.bill === billNo);
        console.log("Filtered data: ");
        console.log(billItems);

        if(billItems && billItems.length > 0){
            this.billItem = billItems[0]; // get the value (returns 1 value only)
        }
    });

    

  }


  test(){
    this.billItem.billInfo.subject.subject
  }

}
