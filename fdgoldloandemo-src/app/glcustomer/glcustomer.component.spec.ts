import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlcustomerComponent } from './glcustomer.component';

describe('GlcustomerComponent', () => {
  let component: GlcustomerComponent;
  let fixture: ComponentFixture<GlcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
