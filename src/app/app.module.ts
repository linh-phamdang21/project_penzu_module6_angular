import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DiaryShowComponent } from './components/diary/diary-show/diary-show.component';
import { AdminShowUserListComponent } from './components/admin/admin-show-user-list.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/user/editUser/profile.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {CKEditorModule} from 'ngx-ckeditor';
import {NgxPaginationModule} from 'ngx-pagination';
import {Permissions} from './auth-guard/permissions';
import {CanActivateTeam} from './auth-guard/can-activate-team';
import {NotActivateTeam} from './auth-guard/not-activate-team';
import {IsAdmin} from './auth-guard/is-admin';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from './components/user/user.component';
import { NoHaveAccessAnnoucementComponent } from './components/no-have-access-annoucement/no-have-access-annoucement.component';
import { FooterComponent } from './components/footer/footer.component';
import {HeaderComponent} from "./components/header/header.component";
import { CreateDiaryComponent } from './components/diary/create-diary/create-diary.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DiaryShowComponent,
    AdminShowUserListComponent,
    UserComponent,
    NoHaveAccessAnnoucementComponent,
    HeaderComponent,
    FooterComponent,
    CreateDiaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CKEditorModule,
    NgxPaginationModule
  ],
  providers: [Permissions, CanActivateTeam, NotActivateTeam , IsAdmin],
  bootstrap: [AppComponent]
})
export class AppModule { }
