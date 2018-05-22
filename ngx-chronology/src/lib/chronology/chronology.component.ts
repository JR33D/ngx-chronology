import { Component, OnInit, Input } from '@angular/core';
import { IChronologyEvent } from '../models/chronology-event.interface';

@Component({
   selector: 'ngx-chronology',
   templateUrl: './chronology.component.html',
   styleUrls: ['./chronology.component.scss'],
})
export class ChronologyComponent {
   @Input() public events: Array<IChronologyEvent>;
   @Input() public title: string;
   constructor() {}

   getIconInfo(event: IChronologyEvent) {
      if (!event.icon) {
         return ['far', 'dot-circle'];
      } else {
         return [event.faLibrary, event.icon];
      }
   }
}
