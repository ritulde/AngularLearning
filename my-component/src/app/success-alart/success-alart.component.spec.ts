import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAlartComponent } from './success-alart.component';

describe('SuccessAlartComponent', () => {
  let component: SuccessAlartComponent;
  let fixture: ComponentFixture<SuccessAlartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAlartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAlartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
