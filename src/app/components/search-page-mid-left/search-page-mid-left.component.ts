import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { LisPickListComponent } from '../lis-pick-list/lis-pick-list.component';
import { PickListDialogComponent } from '../pick-list-dialog/pick-list-dialog.component';

@Component({
  selector: 'LIS-search-page-mid-left',
  templateUrl: './search-page-mid-left.component.html',
  styleUrls: ['./search-page-mid-left.component.scss']
})
export class SearchPageMidLeftComponent implements OnInit {


  filedFromDate: FormControl;
  serializedfiledFromDate: FormControl;
  filedDateTo: FormControl;
  serializedfiledDateTo: FormControl;
  statusFromDate: FormControl;
  serializedfiledstatusFromDate: FormControl;
  statusDateTo: FormControl;
  serializedfiledstatusStatusDateTo: FormControl;
  sessionSequenceNo: string;
  sessionType: string;
  billResoNoDrop: string;
  billResoNo: string;
  legislativeStatus: string;
  author: string;
  currentSouceList: any[] = new Array();
  currentDestinationList: any[] = new Array();
  sessionTypes: SessionTypes[] = [
    {value: 'FIRST REGULAR SESSION', name: 'FIRST REGULAR SESSION'},
    {value: 'FIRST SPECIAL SESSION', name: 'FIRST SPECIAL SESSION'},
    {value: 'SECOND REGULAR SESSION', name: 'SECOND REGULAR SESSION'},
    {value: 'SECOND SPECIAL SESSION', name: 'SECOND SPECIAL SESSION'},
    {value: 'THIRD REGULAR SESSION', name: 'THIRD REGULAR SESSION'},
    {value: 'THIRD SPECIAL SESSION', name: 'THIRD SPECIAL SESSION'},
    {value: 'FOURTH REGULAR SESSION', name: 'FOURTH REGULAR SESSION'},
    {value: 'FOURTH SPECIAL SESSION', name: 'FOURTH SPECIAL SESSION'},
    {value: 'FIFTH REGULAR SESSION', name: 'FIFTH REGULAR SESSION'},
    {value: 'FIFTH SPECIAL SESSION', name: 'FIFTH SPECIAL SESSION'}

  ];

  billTypes: BillTypes[] = [
    {value:'HBN', name:'HOUSE BILL'},
    {value:'HCR', name:'HOUSE CONCURRENT RESOLUTION'},
    {value:'HJR', name:'HOUSE JOINT RESOLUTION'},
    {value:'HRB', name:'RESOLUTION OF BOTH HOUSES - HOUSE'},
    {value:'SBN', name:'SENATE BILL'},
    {value:'SCR', name:'SENATE CONCURRENT RESOLUTION'},
    {value:'SJR', name:'SENATE JOINT RESOLUTION'},
    {value:'SRB', name:'RESOLUTION OF BOTH HOUSES - SENATE'},
    {value:'SRN', name:'SENATE RESOLUTION'},
    {value:'TRY', name:'TREATY'},
    {value:'UNB', name:'UNNUMBERED BILL'},
    {value:'UNR', name:'UNNUMBERED RESOLUTION'}
  ];

  legislativeStatusChoice: LegislativeStatus[] = [
    {value:'none', name:''},
    {value:'PENDING SENATE', name:'PENDING SENDATE'},
    {value:'COPY OF RESOLUTION READ', name:'COPY OF RESOLUTION READ'},
    {value:'PENDING IN THE COMMITTEE', name:'PENDING IN THE COMMITTEE'},
    {value:'COMMITTEE REPORT APPROVED', name:'COMMITTEE REPORT APPROVED'},
    {value:'WITH SENATE DESIGNATED CONFERENCE', name:'PENDING SENDATE'},
    {value:'PENDING SECOND READING, ORDINARY BUSINESS', name:'PENDING SECOND READING, ORDINARY BUSINESS'},
    {value:'PENDING SECOND READING, SPECIAL ORDER', name:'PENDING SECOND READING, SPECIAL ORDER'},
    {value:'APPROVED ON SECOND READING, WITHOUT AMMENDMENT', name:'APPROVED ON SECOND READING, WITHOUT AMMENDMENT'},
  ];

  authors: Authors[] = [
    {value:'ANGARA, JUAN EDUARDO "SONNY" M.', name:'ANGARA, JUAN EDUARDO "SONNY" M.'},
    {value:'AQUINO IV, PAULO BENIGNO "BAM"', name:'AQUINO IV, PAULO BENIGNO "BAM"'},
    {value:'BINAY, MARIA LOURDES NANCY S.', name:'BINAY, MARIA LOURDES NANCY S.'},
    {value:'CAYETANO, ALAN PETER COMPAÑERO S.', name:'CAYETANO, ALAN PETER COMPAÑERO S.'},
    {value:'DE LIMA, LEILA M.', name:'DE LIMA, LEILA M.'}
  ];


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.inititlizeDatePickerValues();
    this.showCoAuthors();
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



  showCoAuthors(): void {
    this.currentSouceList.push.apply(this.currentSouceList, this.authors);
  }


  showPickListDialog(): void {
    const dialogRef = this.dialog.open(PickListDialogComponent, {
      width: '1000px',
      data: {sourceList: this.currentSouceList, destinationList: this.currentDestinationList}
    });
  }


}

export class SessionTypes {
  value: string;
  name: string;
}


export class BillTypes {
  value: string;
  name: string;
}

export class LegislativeStatus {
  value: string;
  name: string;
}

export class Authors {
  value: string;
  name: string;
}
