import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { ChronologyComponent } from './chronology/chronology.component';
import {
   ChronologyContentDirective,
   ChronologyTitleDirective,
} from './directives/layout.directive';

library.add(far, fas, fab);

@NgModule({
   imports: [BrowserModule, FontAwesomeModule],
   declarations: [
      ChronologyComponent,
      ChronologyContentDirective,
      ChronologyTitleDirective
   ],
   exports: [
      ChronologyComponent,
      ChronologyTitleDirective,
      ChronologyContentDirective
   ],
})
export class NgxChronologyModule {}
