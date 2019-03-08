import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'LIS-search-page-mid-left',
  templateUrl: './search-page-mid-left.component.html',
  styleUrls: ['./search-page-mid-left.component.scss']
})
export class SearchPageMidLeftComponent implements OnInit {


  private filedFromDate: FormControl;
  private serializedfiledFromDate: FormControl;
  private filedDateTo: FormControl;
  private serializedfiledDateTo: FormControl;
  private statusFromDate: FormControl;
  private serializedfiledstatusFromDate: FormControl;
  private statusDateTo: FormControl;
  private serializedfiledstatusStatusDateTo: FormControl;
  private sessionSequenceNo: string;
  private billResoNoDrop: string;
  private billResoNo: string;
  private legislativeStatus: string;
  private author: string;


  constructor() { }

  ngOnInit() {
    this.inititlizeDatePickerValues();
  }


  inititlizeDatePickerValues(): void {

    this.filedFromDate = new FormControl(new Date());
    this.serializedfiledFromDate = new FormControl((new Date()).toISOString());

    this.filedDateTo = new FormControl(new Date());
    this.serializedfiledDateTo = new FormControl((new Date()).toISOString());

    this.statusFromDate = new FormControl(new Date());
    this.serializedfiledstatusFromDate = new FormControl((new Date()).toISOString());

    this.statusDateTo = new FormControl(new Date());
    this.serializedfiledstatusStatusDateTo = new FormControl((new Date()).toISOString());

  }

}
