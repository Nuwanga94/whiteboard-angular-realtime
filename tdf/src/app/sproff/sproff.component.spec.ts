import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SproffComponent } from './sproff.component';

describe('SproffComponent', () => {
  let component: SproffComponent;
  let fixture: ComponentFixture<SproffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SproffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SproffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
