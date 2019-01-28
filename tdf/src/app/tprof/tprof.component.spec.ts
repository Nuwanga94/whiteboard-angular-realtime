import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TprofComponent } from './tprof.component';

describe('TprofComponent', () => {
  let component: TprofComponent;
  let fixture: ComponentFixture<TprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
