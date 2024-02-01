import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyChildOneComponent } from './lazy-child-one.component';

describe('LazyChildOneComponent', () => {
  let component: LazyChildOneComponent;
  let fixture: ComponentFixture<LazyChildOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyChildOneComponent]
    });
    fixture = TestBed.createComponent(LazyChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
