import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocupComponent } from './docup.component';

describe('DocupComponent', () => {
  let component: DocupComponent;
  let fixture: ComponentFixture<DocupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
