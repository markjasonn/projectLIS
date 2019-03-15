import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'LIS-lis-pick-list',
  templateUrl: './lis-pick-list.component.html',
  styleUrls: ['./lis-pick-list.component.scss']
})
export class LisPickListComponent implements OnInit, OnChanges {

  @Input() sourceList:any [];
  @Input() destinationList:any [];
  @Output() okButtonFunction: EventEmitter<any>;

  @ViewChild("sourceList") sourceListEl: ElementRef;
  

  currentSourceList: any[] = new Array();
  selectedList: any[] = new Array();
  sourceSelectedItem: any[] = new Array();
  destSelectedItem: any[] = new Array();
  

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.sourceList){
      this.currentSourceList = this.sourceList;
      this.selectedList = this.destinationList;
    }

  }

  moveSelected(): void {
    for(let selected of this.sourceSelectedItem){
      this.currentSourceList.splice(this.currentSourceList.indexOf(selected), 1);
      this.selectedList.push(selected);
    }
  }

  moveAll(): void {
    this.selectedList.push.apply(this.selectedList, this.currentSourceList);
    this.currentSourceList.splice(0, this.currentSourceList.length);
  }

  returnSelected(): void {
    for(let selected of this.destSelectedItem){
      this.selectedList.splice(this.selectedList.indexOf(selected), 1);
      this.currentSourceList.push(selected);
    }
  }

  returnAll(): void {
    this.currentSourceList.push.apply(this.currentSourceList, this.selectedList);
    this.selectedList.splice(0, this.selectedList.length);
  }

  cancelPickListSelection(): void {
    this.returnAll();
  }

}
