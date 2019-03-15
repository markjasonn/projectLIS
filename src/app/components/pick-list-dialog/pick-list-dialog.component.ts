import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'LIS-pick-list-dialog',
  templateUrl: './pick-list-dialog.component.html',
  styleUrls: ['./pick-list-dialog.component.scss']
})
export class PickListDialogComponent implements OnInit {

  sourceList: any[];
  destinationList: any [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.sourceList = this.data.sourceList;
    this.destinationList = this.data.destinationList;
  }

}
