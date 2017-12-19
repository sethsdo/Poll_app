import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicService } from './public.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './landing/login/login.component';
import { RegistrationComponent } from './landing/registration/registration.component';
import { PollComponent } from './poll/poll.component';
import { CreateComponent } from './create/create.component';
import { SearchPipe } from './searchPipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingComponent,
    LoginComponent,
    RegistrationComponent,
    PollComponent,
    CreateComponent,
    SearchPipe,
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PublicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
