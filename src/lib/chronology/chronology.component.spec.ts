import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronologyComponent } from './chronology.component';
import { Component, ViewChild } from '@angular/core';

describe('ChronologyComponent', () => {
   let testHostComponent: TestChronologyHostComponent;
   let testHostFixture: ComponentFixture<TestChronologyHostComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ChronologyComponent, TestChronologyHostComponent],
      }).compileComponents();
   }));

   beforeEach(() => {
      testHostFixture = TestBed.createComponent(TestChronologyHostComponent);
      testHostComponent = testHostFixture.componentInstance;
   });

   it('should create', () => {
      expect(testHostComponent.chronologyUnderTest).toBeTruthy(
         'There was an issue creating a new instance of ChronologyComponent',
      );
   });

   @Component({
      selector: `host-test-component`,
      template: `<ngx-chronology></ngx-chronology>`,
   })
   class TestChronologyHostComponent {
      @ViewChild(ChronologyComponent) public chronologyUnderTest: ChronologyComponent;
   }
});
