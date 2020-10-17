import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {
//   MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
//   MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
// } from '@angular/material';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserComponent } from './user/user.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatCardModule,
    // MatInputModule,
    // MatDialogModule,
    // MatTableModule,
    // MatMenuModule,
    // MatIconModule,
    // MatProgressSpinnerModule,
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

