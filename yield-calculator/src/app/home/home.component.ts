import {Component, OnInit, Output} from '@angular/core';
import {Income} from "../models/Income";
import {Expense} from "../models/Expense";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   step:number = 0;
   income:Income;
   expense:Expense;

  constructor() {
   this.income = new Income(1300);
   this.expense = new Expense(125000);
  }

  ngOnInit() {  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  reset(){
  }
}
