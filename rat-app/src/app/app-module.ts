import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { Internal } from './internal/internal';
import { PipuuuPipe } from './pipuuu-pipe';
import { Login } from './login/login';

@NgModule({
  declarations: [
    App,
    Internal,
    PipuuuPipe,
    Login
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  bootstrap: [App]   
})
export class AppModule {}
