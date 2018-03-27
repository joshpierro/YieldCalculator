import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatExpansionModule,MatCardModule,MatInputModule} from "@angular/material";
import { HomeComponent } from './home.component';
import {ExpensesComponent} from "../expenses/expenses.component";
import {IncomeComponent} from '../income/income.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CalculatorService} from "../calculator.service";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,ExpensesComponent,IncomeComponent ],
      imports: [MatExpansionModule,MatCardModule,ReactiveFormsModule,MatInputModule,BrowserAnimationsModule],
      providers: [CalculatorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
