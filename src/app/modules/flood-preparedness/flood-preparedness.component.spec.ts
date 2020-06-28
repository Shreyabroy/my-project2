/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FloodPreparednessComponent } from './flood-preparedness.component';

describe('FloodPreparednessComponent', () => {
  let component: FloodPreparednessComponent;
  let fixture: ComponentFixture<FloodPreparednessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloodPreparednessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloodPreparednessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
