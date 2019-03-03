import { Component, Input } from '@angular/core';

@Component({
   selector: 'ngx-chronology-icon',
   templateUrl: './chronology-icon.component.html',
   styleUrls: ['./chronology-icon.component.scss'],
})
export class ChronologyIconComponent {
   @Input() public icon: string;

   constructor() {}
}
