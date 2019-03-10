import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageMidComponent } from './search-page-mid.component';

describe('SearchPageMidComponent', () => {
  let component: SearchPageMidComponent;
  let fixture: ComponentFixture<SearchPageMidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageMidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
