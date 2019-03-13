import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisPickListComponent } from './lis-pick-list.component';

describe('LisPickListComponent', () => {
  let component: LisPickListComponent;
  let fixture: ComponentFixture<LisPickListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisPickListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
