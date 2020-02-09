import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsPaymentComponent } from './credits-payment.component';

describe('CreditsPaymentComponent', () => {
  let component: CreditsPaymentComponent;
  let fixture: ComponentFixture<CreditsPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
