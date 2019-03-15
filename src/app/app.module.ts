import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatSidenavModule, MatToolbarModule,
        MatIconModule, MatButtonModule, MatCheckboxModule,
        MatListModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';


import { SearchPageComponent } from './components/search-page/search-page.component';
import { ResultListPageComponent } from './components/result-list-page/result-list-page.component';
import { BillInformationPageComponent } from './components/bill-information-page/bill-information-page.component';
import { AppHeaderComponent } from './components/app-header/app-header.component'
import { MatCardModule } from '@angular/material/card';
import { SidenavListComponent } from './components/side-nav-list/side-nav-list.component';
import { SearchPageTopComponent } from './components/search-page-top/search-page-top.component';
import { SearchPageMidComponent } from './components/search-page-mid/search-page-mid.component';
import { SearchPageMidLeftComponent } from './components/search-page-mid-left/search-page-mid-left.component';
import { SearchPageMidRightComponent } from './components/search-page-mid-right/search-page-mid-right.component';
import { SearchPageBottomComponent } from './components/search-page-bottom/search-page-bottom.component';
import { AddNewComponent } from './components/add-new/add-new.component'
import { LisPickListComponent } from './components/lis-pick-list/lis-pick-list.component';
import { PickListDialogComponent } from './components/pick-list-dialog/pick-list-dialog.component';
import { AddNewComponentForm } from './components/add-new-form/add-new-form.component';
import { LoginComponent } from './components/login/login.component';
import { AddEditVotesComponent } from './components/add-edit-votes/add-edit-votes.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchPageComponent },
  { path: 'billing-info/:id',      component: BillInformationPageComponent },
  {
    path: 'result-list',
    component: ResultListPageComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'add-new',
    component: AddNewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ResultListPageComponent,
    BillInformationPageComponent,
    AppHeaderComponent, SidenavListComponent, SearchPageTopComponent, SearchPageMidComponent, AddNewComponent,
    LisPickListComponent, PickListDialogComponent, SearchPageMidLeftComponent, SearchPageMidRightComponent, SearchPageBottomComponent,
    AddNewComponentForm, LoginComponent, AddEditVotesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule, FormsModule,
    BrowserAnimationsModule,
    MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule,
    InfiniteScrollModule, MatFormFieldModule, MatInputModule,
    MatSidenavModule, MatToolbarModule, MatIconModule,
    MatListModule, MatTabsModule, MatTableModule, MatSelectModule, MatDatepickerModule, 
    MatNativeDateModule, MatCardModule, MatDialogModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PickListDialogComponent]
})
export class AppModule {
  constructor() {
    console.log('sample');
  }
 }
