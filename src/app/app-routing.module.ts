import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { GlobalFeedComponent } from './globalFeed/components/global-feets/global-feed.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  { path: '', component: GlobalFeedComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
