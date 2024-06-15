import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './lib/authenticationFields/log-in/log-in.component';
import { SingUpComponent } from './lib/authenticationFields/sing-up/sing-up.component';
import { SlideBarComponent } from './lib/slide-bar/slide-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SingUpComponent,
    SlideBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
