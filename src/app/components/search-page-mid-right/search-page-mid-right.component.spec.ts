import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageMidRightComponent } from './search-page-mid-right.component';

describe('SearchPageMidRightComponent', () => {
  let component: SearchPageMidRightComponent;
  let fixture: ComponentFixture<SearchPageMidRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageMidRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageMidRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
