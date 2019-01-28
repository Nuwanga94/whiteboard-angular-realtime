import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdeleteComponent } from './sdelete.component';

describe('SdeleteComponent', () => {
  let component: SdeleteComponent;
  let fixture: ComponentFixture<SdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
