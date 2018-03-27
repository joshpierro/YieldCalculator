import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Expense} from "../models/Expense";
import {CalculatorService} from "../calculator.service";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  calculatorService:CalculatorService;
  expenseForm: FormGroup;
  @Input() expense: Expense = new Expense();
  @Output() expenseChange = new EventEmitter<Expense>();

  constructor(calculatorService:CalculatorService) {
    this.calculatorService = calculatorService;
    this.setupForm();
  }

  private setupForm(): void {

    this.expenseForm = new FormGroup({
      purchasePrice: new FormControl('', [Validators.required]),
      taxes: new FormControl('', [Validators.required]),
      maintenance: new FormControl('', [Validators.required]),
      other: new FormControl()
    });


    this.expenseForm.valueChanges.subscribe(val => {
      this.expenseChange.emit(val);
      this.calculatorService.calculateYield();
    });
  }

  ngOnInit() {}

}
