import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlcalculatorComponent } from './glcalculator.component';

describe('GlcalculatorComponent', () => {
  let component: GlcalculatorComponent;
  let fixture: ComponentFixture<GlcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlcalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
