import {Component, OnInit, Output} from '@angular/core';
import {CalculatorService} from "../calculator.service";
import {Yield} from "../models/Yield";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  step: number = 0;
  yield:Yield;
  calculatorService: CalculatorService;

  constructor(calculatorService: CalculatorService) {
    this.yield = calculatorService.yield;
  }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  reset() {
  }
}
