import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LIS-search-page-top',
  templateUrl: './search-page-top.component.html',
  styleUrls: ['./search-page-top.component.scss']
})
export class SearchPageTopComponent implements OnInit {

  private congressLibrary: string;
  private searchCategory: string;

  constructor() { }

  ngOnInit() {
  }

}
