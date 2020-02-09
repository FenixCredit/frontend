import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsProductsComponent } from './credits-products.component';

describe('CreditsProductsComponent', () => {
  let component: CreditsProductsComponent;
  let fixture: ComponentFixture<CreditsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
