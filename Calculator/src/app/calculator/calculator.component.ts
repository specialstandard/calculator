import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nab-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

    answer: number;
    isBlank: boolean;
    isDecimal: boolean;
    result: string;
    previousOperator: any;
    total: number[];
    value: any;

    public ngOnInit(): void {
        this.result = '';
        this.isDecimal = false;
        this.answer = 0;
        this.total = [];
        this.isBlank = false;
        this.previousOperator = false;
    }

    public onClickNumber(val: string): void {

        if (this.isBlank === true) {
            this.result = '';
            this.isBlank = false;
        }

        if (val === '.') {
            if (this.isDecimal === true) {
                return;
            }
            this.isDecimal = true;
        }

        this.result += val;
    }

    public onClickOperator(operator: string): void {

        this.total.push(Number(this.result));
        this.result = '';

        if (this.total.length === 2) {
            const num1 = Number(this.total[0]);
            const num2 = Number(this.total[1]);
            let answer: number;

            if (this.previousOperator === '+') {
                answer = num1 + num2;
            } else if (this.previousOperator === '-') {
                answer = num1 - num2;
            } else if (this.previousOperator === '*') {
                answer = num1 * num2;
            } else {
                answer = num1 / num2;
            }

            this.total = [];
            this.total.push(answer);
            this.result = answer.toString();
            this.isBlank = true;
        } else {
            this.isBlank = false;
        }

        this.isDecimal = false;
        this.previousOperator = operator;
    }

    public onClickEquals(): void {

        const num1 = Number(this.total[0]);
        const num2 = Number(this.result);
        let answer: number;

        switch (this.previousOperator) {
            case '+':
                answer = num1 + num2;
                break;
            case '-':
                answer = num1 - num2;
                break;
            case '*':
                answer = num1 * num2;
                break;
            case '/':
                answer = num1 / num2;
                break;
            default:
                break;
        }

        if (isNaN(answer)) {
            return;
        }

        this.result = answer.toString();
        this.total = [];
        this.isBlank = true;
    }
}
