import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsStatusComponent } from './credits-status.component';

describe('CreditsStatusComponent', () => {
  let component: CreditsStatusComponent;
  let fixture: ComponentFixture<CreditsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
