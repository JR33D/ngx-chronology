import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChronologyComponent } from './chronology/chronology.component';

@NgModule({
   imports: [BrowserModule],
   declarations: [ChronologyComponent],
   exports: [ChronologyComponent],
})
export class NgxChronologyModule {}
