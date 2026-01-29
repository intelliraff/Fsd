import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Internal } from './internal/internal';
import { PipuuuPipe } from './pipuuu-pipe';

@NgModule({
  declarations: [
    App,
    Internal,
    PipuuuPipe
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [App]   
})
export class AppModule {}
