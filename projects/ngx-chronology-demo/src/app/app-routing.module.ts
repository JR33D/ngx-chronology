import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ConfigurationsComponent } from './configurations/configurations.component';

const routes: Routes = [
   {
      path: 'demo',
      component: DemoComponent,
   },
   {
      path: 'config',
      component: ConfigurationsComponent,
   },
   {
      path: '',
      redirectTo: '/demo',
      pathMatch: 'full',
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
