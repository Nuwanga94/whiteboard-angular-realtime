import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TviewstComponent } from './tviewst.component';

describe('TviewstComponent', () => {
  let component: TviewstComponent;
  let fixture: ComponentFixture<TviewstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TviewstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TviewstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
