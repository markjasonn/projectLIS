import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LIS-search-page-top',
  templateUrl: './search-page-top.component.html',
  styleUrls: ['./search-page-top.component.scss']
})
export class SearchPageTopComponent implements OnInit {

  congressLibrary: string;
  searchCategory: string;
  congressLibraries: CongressLibraries[] = [
    {libValue: 'THIRTEENTH', libName: 'THIRTEENTH'},
    {libValue: 'FOURTEENTH', libName: 'FOURTEENTH'},
    {libValue: 'FIFTEENTH', libName: 'FIFTEENTH'},
    {libValue: 'SIXTEENTH', libName: 'SIXTEENTH'},
    {libValue: 'SEVENTEENTH', libName: 'SEVENTEENTH'}

  ];

  constructor() { }

  ngOnInit() {
  }

}


export class CongressLibraries {
  libValue: string;
  libName: string;
}
