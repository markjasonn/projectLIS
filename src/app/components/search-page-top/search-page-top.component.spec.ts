import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageTopComponent } from './search-page-top.component';

describe('SearchPageTopComponent', () => {
  let component: SearchPageTopComponent;
  let fixture: ComponentFixture<SearchPageTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
