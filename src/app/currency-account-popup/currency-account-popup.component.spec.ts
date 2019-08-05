import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyAccountPopupComponent } from './currency-account-popup.component';

describe('CurrencyAccountPopupComponent', () => {
  let component: CurrencyAccountPopupComponent;
  let fixture: ComponentFixture<CurrencyAccountPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyAccountPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyAccountPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
