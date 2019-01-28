import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofaComponent } from './editprofa.component';

describe('EditprofaComponent', () => {
  let component: EditprofaComponent;
  let fixture: ComponentFixture<EditprofaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
