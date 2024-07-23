import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl:'./emi-calculator.component.html',
  styleUrl: './emi-calculator.component.css'
})
export class EmiCalculatorComponent {
  loanAmount: number;
  interestRate: number;
  loanTenure: number;
  emi: number;

  calculateEMI() {
    const monthlyInterestRate = this.interestRate / 100 / 12;
    const numberOfPayments = this.loanTenure * 12;

    this.emi = (this.loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
               (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  }

}
