import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BuyerFormComponent } from './landing-page/buyer-form/buyer-form.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent,},
  { path: 'buyer-form', component: BuyerFormComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
