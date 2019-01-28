import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocdownComponent } from './docdown.component';

describe('DocdownComponent', () => {
  let component: DocdownComponent;
  let fixture: ComponentFixture<DocdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
