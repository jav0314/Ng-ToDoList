import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './lib/authenticationFields/log-in/log-in.component';
import { SingUpComponent } from './lib/authenticationFields/sing-up/sing-up.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LogInComponent, SingUpComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
