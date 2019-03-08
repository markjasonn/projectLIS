import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
declare var require: any
import * as nisVersion from "ngx-infinite-scroll";
// const nisPackage = require('./../../../../package.json');

@Component({
  selector: 'LIS-result-list-page',
  templateUrl: './result-list-page.component.html',
  styleUrls: ['./result-list-page.component.scss']
})
export class ResultListPageComponent implements OnInit {
  //TABLE
  displayedColumns = ['bill', 'shortTitle', 'dateFiled', 'author'];
  dataSource = ELEMENT_DATA;

  //INFINITE SCROLL
  infiniteBody = modalText;
  word = "sample ";
  array = [];
  sum = 2;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';

  // nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

  constructor() {
    this.appendItems(0, this.sum);
  }

  ngOnInit() {
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, ' ', this.word].join(''));
    }
  }
  
  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }
  
  onScroll() {
    console.log('scrolled!!');
    this.infiniteBody += modalText;
  }

  onScrollDown(ev) {
    console.log('scrolled down!!', ev);
    // add another 20 items
    const start = this.sum;
    // this.sum += 20;
    this.appendItems(start, this.sum);    
    this.direction = 'down'
  } 

  onScrollUp(ev) {
    console.log('scrolled up!', ev);
    // const start = this.sum;
    // this.sum += 20;
    // this.prependItems(start, this.sum);  
    // this.direction = 'up';
  }

  // generateWord() {
  //   return chance.word();
  // }



  
  testClick(){
    alert("Button Worked!");
  }  
}

export interface searchResult {
  bill: string;
  shortTitle: string;
  dateFiled: string;
  author: string;
}

const ELEMENT_DATA: searchResult[] = [
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
  {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'}
  
];

var modalText = `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.`;