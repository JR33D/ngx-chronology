import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ConfigurationsComponent } from './configurations/configurations.component';

const routes: Routes = [
   {
      path: '',
      component: DemoComponent,
   },
   {
      path: 'config',
      component: ConfigurationsComponent,
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
