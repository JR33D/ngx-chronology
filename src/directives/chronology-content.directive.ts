import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngxChronologyContent]' })
export class ChronologyContentDirective {
   constructor(public templateRef: TemplateRef<any>) {}
}
