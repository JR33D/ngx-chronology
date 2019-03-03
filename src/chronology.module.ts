import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChronologyComponent } from './chronology/chronology.component';
import { ChronologyTitleDirective } from './directives/chronology-title.directive';
import { ChronologyContentDirective } from './directives/chronology-content.directive';
import { ChronologyIconComponent } from './chronology/chronology-icon/chronology-icon.component';

@NgModule({
   imports: [BrowserModule],
   declarations: [
      ChronologyComponent,
      ChronologyIconComponent,
      ChronologyContentDirective,
      ChronologyTitleDirective
   ],
   exports: [
       ChronologyComponent,
       ChronologyIconComponent,
      ChronologyTitleDirective,
      ChronologyContentDirective
   ],
})
export class NgxChronologyModule {}
