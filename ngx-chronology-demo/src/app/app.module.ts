import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DemoComponent } from './demo/demo.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxChronologyModule } from 'ngx-chronology';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      DemoComponent,
      ConfigurationsComponent,
   ],
   imports: [
       BrowserModule,
       AppRoutingModule,
       NgxChronologyModule
    ],
   providers: [
    { provide: APP_BASE_HREF, useValue: environment.baseRef }
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}
