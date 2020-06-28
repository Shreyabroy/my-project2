/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RiskProneComponent } from './risk-prone.component';

describe('RiskProneComponent', () => {
  let component: RiskProneComponent;
  let fixture: ComponentFixture<RiskProneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskProneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskProneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
