import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'add-new-form-page',
  templateUrl: './add-new-form.component.html',
  styleUrls: ['./add-new-form.component.scss']
})
export class AddNewComponentForm implements OnInit {

isExpanded: boolean = false;
sequenceNo: number;
billNo: number;
billTitle: string = '';
statusDate: FormControl = new FormControl();
dateSigned: FormControl = new FormControl();
dateReceived: FormControl = new FormControl();
dateCertified: FormControl = new FormControl();
requestedBy: string = '';
dateRequest: FormControl = new FormControl();
voteDate: FormControl = new FormControl();
billLongTitle: string = '';
committeeReportNo: number;

  constructor( ) { }


  ngOnInit() {


  }

  expandCollapse(){
    this.isExpanded = this.isExpanded ? false: true;
  }

}