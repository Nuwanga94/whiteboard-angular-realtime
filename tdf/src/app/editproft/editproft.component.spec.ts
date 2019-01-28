import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproftComponent } from './editproft.component';

describe('EditproftComponent', () => {
  let component: EditproftComponent;
  let fixture: ComponentFixture<EditproftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditproftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
