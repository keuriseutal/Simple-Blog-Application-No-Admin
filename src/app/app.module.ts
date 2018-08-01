import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule }     from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
//containers
import { RetrievePasswordComponent } from '../_containers/retrieve-password/retrieve-password.component';
//components
import { PrintPasswordComponent } from '../_components/print-password/print-password.component';
import { AppComponent } from './app.component';
import { LoginComponent } from '../_components/login/login.component';
import { DashboardComponent } from '../_components/dashboard/dashboard.component';
import { DashboardViewerComponent } from '../_components/dashboard-viewer/dashboard-viewer.component';
import { ProfileComponent } from '../_components/profile/profile.component';
import { DraftsComponent } from '../_components/drafts/drafts.component';
import { ForgotPasswordComponent } from '../_components/forgot-password/forgot-password.component';
import { CreatePostComponent } from '../_components/create-post/create-post.component';
import { EditPostComponent } from '../_components/edit-post/edit-post.component';
//services
import { UsersService } from '../_services/users.service';
import { PostsService } from '../_services/posts.service';
import { ProfileService } from '../_services/profile.service';
//styles
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    DraftsComponent,
    ForgotPasswordComponent,
    CreatePostComponent,
    EditPostComponent,
    RetrievePasswordComponent,
    PrintPasswordComponent,
    DashboardViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [UsersService, PostsService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
