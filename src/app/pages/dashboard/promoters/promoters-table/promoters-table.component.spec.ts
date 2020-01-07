import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersTableComponent } from './promoters-table.component';

describe('PromotersTableComponent', () => {
  let component: PromotersTableComponent;
  let fixture: ComponentFixture<PromotersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
