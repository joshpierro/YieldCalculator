import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators}from '@angular/forms';
import {Income} from "../models/Income";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  incomeForm: FormGroup;
  @Input() income:Income;
  @Output() incomeChange = new EventEmitter<Income>();

  constructor() {
    this.setupForm();
  }

  private setupForm():void {

    this.incomeForm = new FormGroup({
      rent: new FormControl('', [Validators.required])
    });

    this.incomeForm.valueChanges.subscribe(val => {
      this.incomeChange.emit(val);
    });
  }

  ngOnInit() {
  }

}
