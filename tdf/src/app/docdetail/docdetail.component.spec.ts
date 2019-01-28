import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocdetailComponent } from './docdetail.component';

describe('DocdetailComponent', () => {
  let component: DocdetailComponent;
  let fixture: ComponentFixture<DocdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
