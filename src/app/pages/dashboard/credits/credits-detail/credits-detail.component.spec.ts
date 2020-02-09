import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsDetailComponent } from './credits-detail.component';

describe('CreditsDetailComponent', () => {
  let component: CreditsDetailComponent;
  let fixture: ComponentFixture<CreditsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
