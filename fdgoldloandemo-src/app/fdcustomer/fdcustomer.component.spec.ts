import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdcustomerComponent } from './fdcustomer.component';

describe('FdcustomerComponent', () => {
  let component: FdcustomerComponent;
  let fixture: ComponentFixture<FdcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
