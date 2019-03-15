import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVotesComponent } from './add-edit-votes.component';

describe('AddEditVotesComponent', () => {
  let component: AddEditVotesComponent;
  let fixture: ComponentFixture<AddEditVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
