import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
    let component: CalculatorComponent;
    let fixture: ComponentFixture<CalculatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CalculatorComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create NAB calculator component', () => {
        expect(component).toBeTruthy();
    });

    describe('onClickNumber()', () => {
        it('should append number clicked to result', () => {
            component.onClickNumber('1');

            fixture.detectChanges();
            expect(component.result).toBe('1');
        });
    });

    describe('onClickOperator()', () => {
        it('should add 1 to result when + operator is pushed after 1', () => {
            component.total = [1];
            component.result = '1';
            component.previousOperator = '+';
            component.onClickOperator('+');

            fixture.detectChanges();
            expect(component.result).toBe('2');
        });
    });

    describe('onClickEquals() whole number arithmetic', () => {

        it('should calculate addition operation', () => {
            component.total[0] = 1;
            component.result = '2';
            component.previousOperator = '+';
            component.onClickEquals();

            fixture.detectChanges();
            expect(component.result).toBe('3');
        });

        it('should calculate subtraction operation', () => {
            component.total[0] = 2;
            component.result = '1';
            component.previousOperator = '-';
            component.onClickEquals();

            fixture.detectChanges();
            expect(component.result).toBe('1');
        });

        it('should calculate multiplication operation', () => {
            component.total[0] = 2;
            component.result = '3';
            component.previousOperator = '*';
            component.onClickEquals();

            fixture.detectChanges();
            expect(component.result).toBe('6');
        });

        it('should calculate division operation', () => {
            component.total[0] = 12;
            component.result = '3';
            component.previousOperator = '/';
            component.onClickEquals();

            fixture.detectChanges();
            expect(component.result).toBe('4');
        });
    });

    describe('onClickEquals() decimal number arithmetic', () => {

        it('should calculate addition operation', () => {
            component.total[0] = 1.2;
            component.result = '2.3';
            component.previousOperator = '+';
            component.onClickEquals();

            fixture.detectChanges();
            expect(component.result).toBe('3.5');
        });

        it('should calculate subtraction operation', () => {
            component.total[0] = 2.7;
            component.result = '1.1';
            component.previousOperator = '-';
            component.onClickEquals();

            fixture.detectChanges();
            expect(component.result).toBe('1.6');
        });

        it('should calculate multiplication operation', () => {
            component.total[0] = 2.2;
            component.result = '3.3';
            component.previousOperator = '*';
            component.onClickEquals();

            fixture.detectChanges();
            expect(component.result).toBe('7.26');
        });

        it('should calculate division operation', () => {
            component.total[0] = 1.5;
            component.result = '.5';
            component.previousOperator = '/';
            component.onClickEquals();

            fixture.detectChanges();
            expect(component.result).toBe('3');
        });
    });

});
