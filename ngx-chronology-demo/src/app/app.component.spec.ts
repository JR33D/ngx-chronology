import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { NgxChronologyModule } from 'ngx-chronology';
import { DemoComponent } from './demo/demo.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
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
