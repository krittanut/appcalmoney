import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styles: [
  ]
})




export class CalComponent {
  cal_name: string;
  cal_age: number;
  cal_sage: number;
  cal_salary: number;
  cal_ssalary: number;
  result: number;
  curr: string;

  Calculate(name: string, age: string, sage: string, salary: string, ssalary: string) {
    this.cal_name = name;
    console.log(name);
    this.cal_age = parseInt(age);
    this.cal_sage = parseInt(sage);
    this.cal_salary = parseInt(salary);
    this.cal_ssalary = parseInt(ssalary);
    this.result = 2 * (this.cal_age - this.cal_sage) * (this.cal_salary + this.cal_ssalary)
    this.curr = new Intl.NumberFormat().format(this.result);

  }
  constructor() { }

}
