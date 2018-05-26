import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { IChronologyEvent } from '../models/chronology-event.interface';
import {
   ChronologyTitleDirective,
   ChronologyContentDirective,
} from '../directives/layout.directive';

@Component({
   selector: 'ngx-chronology',
   templateUrl: './chronology.component.html',
   styleUrls: ['./chronology.component.scss'],
})
export class ChronologyComponent {
   @Input() public events: Array<IChronologyEvent>;
   @Input() public title: string;

   @ContentChild(ChronologyTitleDirective) titleTemplate: ChronologyTitleDirective;
   @ContentChild(ChronologyContentDirective) contentTemplate: ChronologyContentDirective;

   constructor() {}

   getIconInfo(event: IChronologyEvent) {
      if (!event.icon) {
         return ['far', 'dot-circle'];
      } else {
         return [event.faLibrary, event.icon];
      }
   }
}
