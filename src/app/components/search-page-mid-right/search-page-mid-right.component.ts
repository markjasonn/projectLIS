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

  sponsor: string;
  primaryCommittee: string;
  secondaryCommittee: string;
  documentCertification: string;
  dateCertFrom: FormControl;
  serializedfiledDateCertFrom: FormControl;
  dateCertTo: FormControl;
  serializedfiledDateCertTo: FormControl;
  scope: string;
  sponsorsSourceList: any[] = new Array();
  sponsorsDestList: any[] = new Array();
  committeeSourceList: any[] = new Array();
  committeeDestList: any[] = new Array();
  subjectSourceList: any[] = new Array();
  subjectDestList: any[] = new Array();

  sponsors: Sponsors[] = [
    {value:'ANGARA, JUAN EDUARDO "SONNY" M.', name:'ANGARA, JUAN EDUARDO "SONNY" M.'},
    {value:'AQUINO IV, PAULO BENIGNO "BAM"', name:'AQUINO IV, PAULO BENIGNO "BAM"'},
    {value:'BINAY, MARIA LOURDES NANCY S.', name:'BINAY, MARIA LOURDES NANCY S.'},
    {value:'CAYETANO, ALAN PETER COMPAÑERO S.', name:'CAYETANO, ALAN PETER COMPAÑERO S.'},
    {value:'DE LIMA, LEILA M.', name:'DE LIMA, LEILA M.'}
  ];

  primaryCommittees: PrimaryCommittees[] = [
    {value:'ACCOUNTABILITY OF PUBLIC OFFICERS AND INVESTIGATIONS', name:'ACCOUNTABILITY OF PUBLIC OFFICERS AND INVESTIGATIONS'},
    {value:'ACCOUNTS', name:'ACCOUNTS'},
    {value:'AGRARIAN REFORM', name:'AGRARIAN REFORM'},
    {value:'AGRICULTURE AND FOOD', name:'AGRICULTURE AND FOOD'},
    {value:'BANKS, FINANCIAL INSTITUTIONS AND CURRENCIES', name:'BANKS, FINANCIAL INSTITUTIONS AND CURRENCIES'}
  ];

  subject: Subject[] = [
    {value:'14TH MONTH PAY', name:'14TH MONTH PAY'},
    {value:'18TH ASIAN GAMES, 2018, INDONESIA', name:'18TH ASIAN GAMES, 2018, INDONESIA'},
    {value:'24/7 DIRECT NATIONAL EMERGENCY HOTLINE', name:'24/7 DIRECT NATIONAL EMERGENCY HOTLINE'},
    {value:'ABACA', name:'ABACA'},
    {value:'ABANDONMENT', name:'ABANDONMENT'},
    {value:'ABOLITION', name:'ABOLITION'}
  ];

  certificates: Certification[] = [
    {value:'NO CERTIFICATION', name:'NO CERTIFICATION'},
    {value:'IMMEDIATE', name:'IMMEDIATE'},
    {value:'PRIORITY', name:'PRIORITY'}
  ];

  scopes: Scopes[] = [
    {value:'BOTH', name:'BOTH'},
    {value:'LOCAL', name:'LOCAL'},
    {value:'NATIONAl', name:'NATIONAl'}
  ];
  

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

    this.initializeDatePickerValues();
    this.showCoSponsors();
    this.show2ndCommitte();
    this.showSubject();

  }


  initializeDatePickerValues(): void {

    this.dateCertFrom = new FormControl(new Date());
    this.serializedfiledDateCertFrom = new FormControl((new Date()).toISOString());

    this.dateCertTo = new FormControl(new Date());
    this.serializedfiledDateCertTo = new FormControl((new Date()).toISOString());

  }

  showCoSponsors(): void {
    this.sponsorsSourceList.push.apply(this.sponsorsSourceList, this.sponsors);
  }

  show2ndCommitte(): void {
    this.committeeSourceList.push.apply(this.committeeSourceList, this.primaryCommittees);
  }

  showSubject(): void {
    this.subjectSourceList.push.apply(this.subjectSourceList, this.subject);
  }


  showPickListDialog(sourceList: any[], destinationList: any[]): void {
    const dialogRef = this.dialog.open(PickListDialogComponent, {
      width: '1000px',
      data: {sourceList: sourceList, destinationList: destinationList }
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