import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxChronologyModule } from 'src/lib/chronology.module';

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      HomeComponent,
      DemoComponent,
      ConfigurationsComponent,
   ],
   imports: [BrowserModule, AppRoutingModule, NgxChronologyModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
