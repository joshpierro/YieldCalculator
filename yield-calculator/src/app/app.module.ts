import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SettingsComponent} from './settings/settings.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ExpensesComponent} from './expenses/expenses.component';
import {IncomeComponent} from './income/income.component';
import {CalculatorService} from "./calculator.service";


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {title: 'Home'},
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {title: 'Settings'}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    ExpensesComponent,
    IncomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
