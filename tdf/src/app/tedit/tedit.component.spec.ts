import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeditComponent } from './tedit.component';

describe('TeditComponent', () => {
  let component: TeditComponent;
  let fixture: ComponentFixture<TeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
