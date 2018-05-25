import { Component } from '@angular/core';

@Component({
   selector: 'ngx-demo-configurations',
   templateUrl: './configurations.component.html',
   styleUrls: ['./configurations.component.scss'],
})
export class ConfigurationsComponent {
   installCmd = `
   npm i ngx-chronology --save`;

   moduleCode = `
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxChronologyModule } from 'ngx-chronology';

    @NgModule({
        imports: [BrowserModule, NgxChronologyModule],
        declarations: [AppComponent],
    })
    export class AppModule { }`;

   interfaceCode = `
   export interface IChronologyEvent {
        title: string;
        icon?: string;
        faLibrary: 'far' | 'fas' | 'fab';
        content: string;
    }`;

   tagUse = `
   <ngx-chronology [title]="chronologyTitle" [events]="ArrayOfEvents"></ngx-chronology>`;

   goToRoute(id) {
      const elm = document.getElementById(id).scrollIntoView();
      const scrolledY = window.scrollY;

      if (scrolledY) {
         window.scroll(0, scrolledY - 56);
      }
   }
}
