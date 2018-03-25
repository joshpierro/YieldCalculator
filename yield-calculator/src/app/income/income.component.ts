import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators}from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  income: number = 1200;
  incomeForm: FormGroup;
  incomeControl: FormControl;

  constructor() {
    this.setupForm();
  }

  private setupForm():void {
    this.incomeForm = new FormGroup({
      incomeControl: new FormControl('', [Validators.required])
    });

    this.incomeForm.valueChanges.subscribe(val => {
      console.log(val);
    });
  }

  ngOnInit() {
  }

}
