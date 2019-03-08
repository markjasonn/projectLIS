import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageBottomComponent } from './search-page-bottom.component';

describe('SearchPageBottomComponent', () => {
  let component: SearchPageBottomComponent;
  let fixture: ComponentFixture<SearchPageBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
