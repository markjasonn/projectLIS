import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillInformationPageComponent } from './bill-information-page.component';

describe('BillInformationPageComponent', () => {
  let component: BillInformationPageComponent;
  let fixture: ComponentFixture<BillInformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillInformationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
