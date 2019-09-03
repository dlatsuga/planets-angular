import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabitanComponent } from './inhabitan.component';

describe('InhabitanComponent', () => {
  let component: InhabitanComponent;
  let fixture: ComponentFixture<InhabitanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabitanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
