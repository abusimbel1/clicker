import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RecordsComponent } from './records/records.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
  },
  {
    path: 'play',
    component: MainPageComponent,
  },
  {
    path: 'records',
    component: RecordsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
