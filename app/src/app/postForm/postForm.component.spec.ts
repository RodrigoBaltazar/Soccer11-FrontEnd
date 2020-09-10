import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { postFormComponent } from './postForm.component';

describe('postFormComponent', () => {
  let component: postFormComponent;
  let fixture: ComponentFixture<postFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ postFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(postFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
