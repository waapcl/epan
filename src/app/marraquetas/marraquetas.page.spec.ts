import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarraquetasPage } from './marraquetas.page';

describe('MarraquetasPage', () => {
  let component: MarraquetasPage;
  let fixture: ComponentFixture<MarraquetasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarraquetasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarraquetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
