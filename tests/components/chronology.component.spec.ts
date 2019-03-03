import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { ChronologyComponent } from '../../src/chronology/chronology.component';
import { ChronologyIconComponent } from '../../src/chronology/chronology-icon/chronology-icon.component';

describe('ChronologyComponent', () => {
   let testHostComponent: TestChronologyHostComponent;
   let testHostFixture: ComponentFixture<TestChronologyHostComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
      declarations: [ChronologyComponent, ChronologyIconComponent, TestChronologyHostComponent],
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
      selector: `test-host-component`,
      template: `<ngx-chronology></ngx-chronology>`,
   })
   class TestChronologyHostComponent {
      @ViewChild(ChronologyComponent) public chronologyUnderTest: ChronologyComponent;
   }
});
