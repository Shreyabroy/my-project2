/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelplineComponent } from './helpline.component';

describe('HelplineComponent', () => {
  let component: HelplineComponent;
  let fixture: ComponentFixture<HelplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
