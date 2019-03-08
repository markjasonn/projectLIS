import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatSidenavModule, MatToolbarModule,
        MatIconModule, MatButtonModule, MatCheckboxModule,
        MatListModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

import { SearchPageComponent } from './components/search-page/search-page.component';
import { ResultListPageComponent } from './components/result-list-page/result-list-page.component';
import { BillInformationPageComponent } from './components/bill-information-page/bill-information-page.component';
import { AppHeaderComponent } from './components/app-header/app-header.component'
import { SidenavListComponent } from './components/side-nav-list/side-nav-list.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ResultListPageComponent,
    BillInformationPageComponent,
    AppHeaderComponent, SidenavListComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule,
    InfiniteScrollModule,
     MatFormFieldModule, MatInputModule,
    MatSidenavModule, MatToolbarModule, MatIconModule,
    MatListModule, MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('sample');
  }
 }
