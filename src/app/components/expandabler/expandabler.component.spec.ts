import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandablerComponent } from './expandabler.component';

describe('ExpandablerComponent', () => {
  let component: ExpandablerComponent;
  let fixture: ComponentFixture<ExpandablerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandablerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandablerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
