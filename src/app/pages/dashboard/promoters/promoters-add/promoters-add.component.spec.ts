import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersAddComponent } from './promoters-add.component';

describe('PromotersAddComponent', () => {
  let component: PromotersAddComponent;
  let fixture: ComponentFixture<PromotersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
