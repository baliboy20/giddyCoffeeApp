import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GidderooComponent } from './gidderoo.component';

describe('GidderooComponent', () => {
  let component: GidderooComponent;
  let fixture: ComponentFixture<GidderooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GidderooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GidderooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
