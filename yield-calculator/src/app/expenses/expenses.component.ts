import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators}from '@angular/forms';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  purchasePrice = 100001;
  expenseForm: FormGroup;
  purchasePriceControl:FormControl;


  constructor() {
    this.setupForm();
  }

  private setupForm():void {

    this.expenseForm = new FormGroup({
      purchasePriceControl: new FormControl('', [Validators.required])
    });


    this.expenseForm.valueChanges.subscribe(val => {
      console.log(val);
    });
  }

  ngOnInit() {
  }

}
