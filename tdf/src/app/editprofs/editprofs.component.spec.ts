import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofsComponent } from './editprofs.component';

describe('EditprofsComponent', () => {
  let component: EditprofsComponent;
  let fixture: ComponentFixture<EditprofsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
