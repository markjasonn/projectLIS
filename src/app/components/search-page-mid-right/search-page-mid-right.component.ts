import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PickListDialogComponent } from '../pick-list-dialog/pick-list-dialog.component';

@Component({
  selector: 'LIS-search-page-mid-right',
  templateUrl: './search-page-mid-right.component.html',
  styleUrls: ['./search-page-mid-right.component.scss']
})
export class SearchPageMidRightComponent implements OnInit {

  private sponsor: string;
  private primaryCommittee: string;
  private secondaryCommittee: string;
  private documentCertification: string;
  private dateCertFrom: FormControl;
  private serializedfiledDateCertFrom: FormControl;
  private dateCertTo: FormControl;
  private serializedfiledDateCertTo: FormControl;
  private scope: string;
  private currentSouceList: any[];

  private sponsors: Sponsors[] = [
    {value:'ANGARA, JUAN EDUARDO "SONNY" M.', name:'ANGARA, JUAN EDUARDO "SONNY" M.'},
    {value:'AQUINO IV, PAULO BENIGNO "BAM"', name:'AQUINO IV, PAULO BENIGNO "BAM"'},
    {value:'BINAY, MARIA LOURDES NANCY S.', name:'BINAY, MARIA LOURDES NANCY S.'},
    {value:'CAYETANO, ALAN PETER COMPAÑERO S.', name:'CAYETANO, ALAN PETER COMPAÑERO S.'},
    {value:'DE LIMA, LEILA M.', name:'DE LIMA, LEILA M.'}
  ];

  private primaryCommittees: PrimaryCommittees[] = [
    {value:'ACCOUNTABILITY OF PUBLIC OFFICERS AND INVESTIGATIONS', name:'ACCOUNTABILITY OF PUBLIC OFFICERS AND INVESTIGATIONS'},
    {value:'ACCOUNTS', name:'ACCOUNTS'},
    {value:'AGRARIAN REFORM', name:'AGRARIAN REFORM'},
    {value:'AGRICULTURE AND FOOD', name:'AGRICULTURE AND FOOD'},
    {value:'BANKS, FINANCIAL INSTITUTIONS AND CURRENCIES', name:'BANKS, FINANCIAL INSTITUTIONS AND CURRENCIES'}
  ];

  private subject: Subject[] = [
    {value:'14TH MONTH PAY', name:'14TH MONTH PAY'},
    {value:'18TH ASIAN GAMES, 2018, INDONESIA', name:'18TH ASIAN GAMES, 2018, INDONESIA'},
    {value:'24/7 DIRECT NATIONAL EMERGENCY HOTLINE', name:'24/7 DIRECT NATIONAL EMERGENCY HOTLINE'},
    {value:'ABACA', name:'ABACA'},
    {value:'ABANDONMENT', name:'ABANDONMENT'},
    {value:'ABOLITION', name:'ABOLITION'}
  ];

  private certificates: Certification[] = [
    {value:'NO CERTIFICATION', name:'NO CERTIFICATION'},
    {value:'IMMEDIATE', name:'IMMEDIATE'},
    {value:'PRIORITY', name:'PRIORITY'}
  ];

  private scopes: Scopes[] = [
    {value:'BOTH', name:'BOTH'},
    {value:'LOCAL', name:'LOCAL'},
    {value:'NATIONAl', name:'NATIONAl'}
  ];
  

  constructor(private dialog: MatDialog) { }

  ngOnInit() {

    this.initializeDatePickerValues();

  }


  initializeDatePickerValues(): void {

    this.dateCertFrom = new FormControl(new Date());
    this.serializedfiledDateCertFrom = new FormControl((new Date()).toISOString());

    this.dateCertTo = new FormControl(new Date());
    this.serializedfiledDateCertTo = new FormControl((new Date()).toISOString());

  }

  showCoSponsors(): void {
    this.currentSouceList = this.sponsors;
  }

  show2ndCommitte(): void {
    this.currentSouceList = this.primaryCommittees;
  }

  showSubject(): void {
    this.currentSouceList = this.subject;
  }


  showPickListDialog(): void {
    const dialogRef = this.dialog.open(PickListDialogComponent, {
      width: '1000px',
      data: this.currentSouceList
    });
  }


}


export class Sponsors {
  value: string;
  name: string;
}

export class PrimaryCommittees {
  value: string;
  name: string;
}

export class Subject {
  value: string;
  name: string;
}

export class Certification {
  value: string;
  name: string;
}

export class Scopes {
  value: string;
  name: string;
}