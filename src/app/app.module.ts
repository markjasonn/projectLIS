import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
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
    MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('sample');
  }
 }
