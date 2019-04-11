import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserTableComponent } from './components/user-list/user-table/user-table.component';
import { UserEditComponent } from './components/user-list/user-edit/user-edit.component';
import { HttpService } from './services/http.service';
import { ShareService } from './services/share.service';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { UserHeaderComponent } from './components/user-list/user-header/user-header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserListComponent,
    UserTableComponent,
    UserEditComponent,
    UserHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [HttpService, ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
