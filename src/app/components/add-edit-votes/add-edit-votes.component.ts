import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LIS-add-edit-votes',
  templateUrl: './add-edit-votes.component.html',
  styleUrls: ['./add-edit-votes.component.scss']
})
export class AddEditVotesComponent implements OnInit {

  senatorVoteStatus: SenatorVoteStatus[] = [
    {name:'ANGARA, JUAN EDUARDO "SONNY" M.', yes:'Yes', no:'', abstain:''},
    {name:'AQUINO IV, PAULO BENIGNO "BAM".', yes:'', no:'No', abstain:''},
    {name:'BINAY, MARIA LOURDES NANCY S.', yes:'', no:'NO', abstain:''},
    {name:'CAYETANO, ALAN PETER COMPAÑERO S.', yes:'Yes', no:'', abstain:''},
    {name:'DE LIMA, LEILA M.', yes:'Yes', no:'', abstain:'Abstain'},
  ];

  constructor() { }

  ngOnInit() {
  }
  

}

export class SenatorVoteStatus {

  name: string;
  yes: string;
  no: string;
  abstain: string;

}
