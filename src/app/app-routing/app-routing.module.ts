import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent }   from '../../app/app.component';
import { LoginComponent }   from '../../_components/login/login.component';
import { RetrievePasswordComponent } from '../../_containers/retrieve-password/retrieve-password.component';
import { ForgotPasswordComponent }   from '../../_components/forgot-password/forgot-password.component';
import { PrintPasswordComponent } from '../../_components/print-password/print-password.component';
import { DashboardComponent }   from '../../_components/dashboard/dashboard.component';
import { ProfileComponent }   from '../../_components/profile/profile.component';
import { CreatePostComponent }   from '../../_components/create-post/create-post.component';
import { EditPostComponent }   from '../../_components/edit-post/edit-post.component';
import { DraftsComponent }   from '../../_components/drafts/drafts.component';

import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'retrieve-password', component: RetrievePasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'print-password', component: PrintPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'edit-post', component: EditPostComponent },
  { path: 'drafts', component: DraftsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes), ModalModule ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}