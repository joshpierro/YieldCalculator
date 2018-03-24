import {BrowserModule} from '@angular/platform-browser';
import {MatToolbarModule} from "@angular/material";
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
