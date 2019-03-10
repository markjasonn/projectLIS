import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'LIS-search-page-mid-right',
  templateUrl: './search-page-mid-right.component.html',
  styleUrls: ['./search-page-mid-right.component.scss']
})
export class SearchPageMidRightComponent implements OnInit {

  private sponsor: string;
  private primaryCommittee: string;
  private secondaryCommittee: string;
  private dateCertFrom: FormControl;
  private serializedfiledDateCertFrom: FormControl;
  private dateCertTo: FormControl;
  private serializedfiledDateCertTo: FormControl;
  private scope: string;
  

  constructor() { }

  ngOnInit() {

    this.initializeDatePickerValues();

  }


  initializeDatePickerValues(): void {

    this.dateCertFrom = new FormControl(new Date());
    this.serializedfiledDateCertFrom = new FormControl((new Date()).toISOString());

    this.dateCertTo = new FormControl(new Date());
    this.serializedfiledDateCertTo = new FormControl((new Date()).toISOString());

  }


}
