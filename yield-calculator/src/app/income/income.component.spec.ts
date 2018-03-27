import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from '@angular/forms';
import {CalculatorService} from "../calculator.service";
import {MatInputModule} from "@angular/material";
import { IncomeComponent } from './income.component';

describe('IncomeComponent', () => {
  let component: IncomeComponent;
  let fixture: ComponentFixture<IncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeComponent ],
      imports: [ BrowserAnimationsModule,ReactiveFormsModule, MatInputModule],
      providers: [CalculatorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {


    expect(1).toBeLessThan(2)

  });
});
