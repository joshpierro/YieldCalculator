import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators}from '@angular/forms';
import {Income} from "../models/Income";
import {CalculatorService} from "../calculator.service";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  calculatorService:CalculatorService;
  incomeForm: FormGroup;
  @Input() income:Income;
  @Output() incomeChange = new EventEmitter<Income>();

  constructor(calculatorService:CalculatorService) {
    this.calculatorService = calculatorService;
    this.setupForm();
  }

  private setupForm():void {

    this.incomeForm = new FormGroup({
      rent: new FormControl('', [Validators.required])
    });

    this.incomeForm.valueChanges.subscribe(val => {
      this.incomeChange.emit(val);
      this.calculatorService.calculateYield();
    });
  }

  ngOnInit() {
  }

}
