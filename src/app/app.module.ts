import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocalDataService } from './local-data.service';

LocalDataService


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [  LocalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
