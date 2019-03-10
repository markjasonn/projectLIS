import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageMidLeftComponent } from './search-page-mid-left.component';

describe('SearchPageMidLeftComponent', () => {
  let component: SearchPageMidLeftComponent;
  let fixture: ComponentFixture<SearchPageMidLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageMidLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageMidLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
