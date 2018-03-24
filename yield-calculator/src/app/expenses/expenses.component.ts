import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder}from '@angular/forms';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  readonly IS_NUMBER_REGEX = new RegExp(/^[+-]?\d+(\.\d+)?([Ee][+-]?\d+)?$/g);
  expenseForm: FormGroup;

  purchasePriceControl = new FormControl('', [
    Validators.required
  ]);

  constructor() {
    this.expenseForm = new FormGroup({});
  }

  ngOnInit() {
  }

}
