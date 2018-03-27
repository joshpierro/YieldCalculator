import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ExpensesComponent} from './expenses.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from "@angular/material";
import {CalculatorService} from "../calculator.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ExpensesComponent', () => {
  let component: ExpensesComponent;
  let fixture: ComponentFixture<ExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesComponent],
      imports: [ BrowserAnimationsModule,ReactiveFormsModule, MatInputModule],
      providers: [CalculatorService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
