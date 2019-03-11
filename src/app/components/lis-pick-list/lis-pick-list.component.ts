import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'LIS-lis-pick-list',
  templateUrl: './lis-pick-list.component.html',
  styleUrls: ['./lis-pick-list.component.scss']
})
export class LisPickListComponent implements OnInit, OnChanges {

  @Input() sourceList:any [];
  private currentSourceList: any[];
  private destinationList: any[];


  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.sourceList){
      this.currentSourceList = this.sourceList;
    }

  }

}
