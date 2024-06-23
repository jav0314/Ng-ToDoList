import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './lib/authenticationFields/log-in/log-in.component';
import { SingUpComponent } from './lib/authenticationFields/sing-up/sing-up.component';
import { FormsModule } from '@angular/forms';
import { UpperCaseDirective } from './directives/upper/upper-case.directive';

@NgModule({
  declarations: [AppComponent, LogInComponent, SingUpComponent, UpperCaseDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
