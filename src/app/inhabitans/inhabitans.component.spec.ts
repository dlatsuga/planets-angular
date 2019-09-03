import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabitansComponent } from './inhabitans.component';

describe('InhabitansComponent', () => {
  let component: InhabitansComponent;
  let fixture: ComponentFixture<InhabitansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabitansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabitansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
