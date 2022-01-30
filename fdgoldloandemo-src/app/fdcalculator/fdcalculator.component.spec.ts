import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdcalculatorComponent } from './fdcalculator.component';

describe('FdcalculatorComponent', () => {
  let component: FdcalculatorComponent;
  let fixture: ComponentFixture<FdcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdcalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
