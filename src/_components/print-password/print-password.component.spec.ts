import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPasswordComponent } from './print-password.component';

describe('PrintPasswordComponent', () => {
  let component: PrintPasswordComponent;
  let fixture: ComponentFixture<PrintPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
