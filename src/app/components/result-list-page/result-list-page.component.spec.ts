import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultListPageComponent } from './result-list-page.component';

describe('ResultListPageComponent', () => {
  let component: ResultListPageComponent;
  let fixture: ComponentFixture<ResultListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
