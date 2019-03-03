import { Component, Input, ContentChild } from '@angular/core';
import { IChronologyEvent } from '../models/chronology-event.interface';
import { ChronologyTitleDirective } from '../directives/chronology-title.directive';
import { ChronologyContentDirective } from '../directives/chronology-content.directive';

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
}
