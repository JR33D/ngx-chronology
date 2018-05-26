import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({ selector: '[ngxChronologyTitle]' })
export class ChronologyTitleDirective {
   constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({ selector: '[ngxChronologyContent]' })
export class ChronologyContentDirective {
   constructor(public templateRef: TemplateRef<any>) {}
}
