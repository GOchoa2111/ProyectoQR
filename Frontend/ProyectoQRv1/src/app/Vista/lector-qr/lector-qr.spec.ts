import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorQr } from './lector-qr';

describe('LectorQr', () => {
  let component: LectorQr;
  let fixture: ComponentFixture<LectorQr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectorQr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectorQr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
