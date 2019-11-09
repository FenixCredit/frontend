import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutEmailComponent } from './put-email.component';

describe('PutEmailComponent', () => {
  let component: PutEmailComponent;
  let fixture: ComponentFixture<PutEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
