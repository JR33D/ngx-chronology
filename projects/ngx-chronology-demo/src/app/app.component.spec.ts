import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { NgxChronologyModule } from 'src/lib/chronology.module';
import { DemoComponent } from './demo/demo.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
describe('AppComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [AppRoutingModule, NgxChronologyModule],
         declarations: [
            AppComponent,
            NavigationComponent,
            DemoComponent,
            ConfigurationsComponent,
            HomeComponent,
         ],
         providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      }).compileComponents();
   }));
   it('should create the app', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
   }));
});
