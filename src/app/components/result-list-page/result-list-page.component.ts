import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
declare var require: any
import * as nisVersion from "ngx-infinite-scroll";
import{ DataSource, BillItems } from '../../source/data/dataSource';


@Component({
  selector: 'LIS-result-list-page',
  templateUrl: './result-list-page.component.html',
  styleUrls: ['./result-list-page.component.scss']
})
export class ResultListPageComponent implements OnInit {
  //TABLE
  displayedColumns = ['bill', 'shortTitle', 'dateFiled', 'author'];
  tableDataObject : TableDataObject = new TableDataObject();
  dataSource: DataSource  = new DataSource(); // source data

  //INFINITE SCROLL
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';

  constructor() {}

  ngOnInit() {
      this.initTableValue();
  }

  initTableValue(){
      this.tableDataObject.allResultList = this.dataSource.billSearchResult;
      this.setListPerDisplay(this.tableDataObject);
  }

  setListPerDisplay(tableDataObject: TableDataObject){
      let index: number = tableDataObject.scrollSetting.index;
      let end: number = 0;

      let remainingItem : number = tableDataObject.allResultList.length - index;
      if(remainingItem >= tableDataObject.scrollSetting.itemPerDisplay){
          end = tableDataObject.scrollSetting.index + tableDataObject.scrollSetting.itemPerDisplay
      }else{
          end = tableDataObject.scrollSetting.index + remainingItem;
      }

      for(let x = tableDataObject.scrollSetting.index; x < end; x++){
          tableDataObject.displayContainer.push(tableDataObject.allResultList[x]);
      }
  }

  displayMoreItems(tableDataObject: TableDataObject){  // for scrolldown
      let index: number = tableDataObject.scrollSetting.index;
      let totalResultLength: number = tableDataObject.allResultList.length;

      if(index < tableDataObject.allResultList.length){
          let remainingItem : number = totalResultLength - index;
          if(remainingItem >= tableDataObject.scrollSetting.itemPerDisplay){
              tableDataObject.scrollSetting.index += tableDataObject.scrollSetting.itemPerDisplay;
          }else{
              tableDataObject.scrollSetting.index += remainingItem;
          }
      }
      this.setListPerDisplay(this.tableDataObject);
  }

  onScrollDownTable(ev){
      this.displayMoreItems(this.tableDataObject);
  }
}

class TableDataObject{
    displayContainer: BillItems[] = [];
    allResultList: BillItems[] = [];
    scrollSetting: ScrollSetting = new ScrollSetting();
}

class ScrollSetting{
    itemPerDisplay: number = 15;
    index: number = 0;
}
