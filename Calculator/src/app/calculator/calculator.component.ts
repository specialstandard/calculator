import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nab-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

    public screen: string = '';

    constructor() { }

    ngOnInit() {
        this.clear();
    }

    public clear() {
        this.screen = '';
    }

    public onClickButton(val: string) {
        this.screen = val;
    }

}
