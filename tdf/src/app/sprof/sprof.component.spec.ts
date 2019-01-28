import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprofComponent } from './sprof.component';

describe('SprofComponent', () => {
  let component: SprofComponent;
  let fixture: ComponentFixture<SprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
