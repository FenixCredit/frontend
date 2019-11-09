import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSentComponent } from './link-sent.component';

describe('LinkSentComponent', () => {
  let component: LinkSentComponent;
  let fixture: ComponentFixture<LinkSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
