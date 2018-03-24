import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule,MatToolbarModule} from "@angular/material";
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import {FlexLayoutModule} from "@angular/flex-layout";


const appRoutes: Routes = [
  { path: '',
    component: SettingsComponent,
    data: { title: 'Home' },
  },
  { path: 'settings',
    component: SettingsComponent,
    data: { title: 'Settings' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
