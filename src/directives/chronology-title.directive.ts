import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngxChronologyTitle]' })
export class ChronologyTitleDirective {
   constructor(public templateRef: TemplateRef<any>) {}
}

