import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSuccesfulComponent } from './reset-succesful.component';

describe('ResetSuccesfulComponent', () => {
  let component: ResetSuccesfulComponent;
  let fixture: ComponentFixture<ResetSuccesfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetSuccesfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetSuccesfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
