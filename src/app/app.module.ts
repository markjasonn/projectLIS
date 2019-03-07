import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

import { SearchPageComponent } from './components/search-page/search-page.component';
import { ResultListPageComponent } from './components/result-list-page/result-list-page.component';
import { BillInformationPageComponent } from './components/bill-information-page/bill-information-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ResultListPageComponent,
    BillInformationPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('sample');
  }
 }
