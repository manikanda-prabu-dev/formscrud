import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserComponent } from './user/user.component';
import { ToastrModule } from 'ngx-toastr';
import { ViewformComponent } from './viewform/viewform.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    UserComponent,
    ViewformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      maxOpened: 1,
      preventDuplicates: true,
      autoDismiss: true}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

