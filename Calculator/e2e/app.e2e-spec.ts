import { AppPage } from './app.po';

describe('calculator App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display title', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Brian Ardito Calculator');
    });

    describe('whole number arithmetic', () => {

        it('should perform addition of 1+1 = 2', () => {
            page.navigateTo();
            page.getButton('1').click();
            page.getButton('add').click();
            page.getButton('1').click();
            page.getButton('equals').click();

            expect(page.getResult()).toEqual('2');
        });

        it('should perform subtraction of 2-1 = 1', () => {
            page.navigateTo();
            page.getButton('2').click();
            page.getButton('subtract').click();
            page.getButton('1').click();
            page.getButton('equals').click();

            expect(page.getResult()).toEqual('1');
        });

        it('should perform multiplication of 2x3 = 6', () => {
            page.navigateTo();
            page.getButton('2').click();
            page.getButton('multiply').click();
            page.getButton('3').click();
            page.getButton('equals').click();

            expect(page.getResult()).toEqual('6');
        });

        it('should perform division of 12/3 = 4', () => {
            page.navigateTo();
            page.getButton('1').click();
            page.getButton('2').click();
            page.getButton('divide').click();
            page.getButton('3').click();
            page.getButton('equals').click();

            expect(page.getResult()).toEqual('4');
        });
    });

    describe('decimal number arithmetic', () => {

        it('should perform addition of 1.1+2.3 = 3.5', () => {
            page.navigateTo();
            page.getButton('1').click();
            page.getButton('decimal').click();
            page.getButton('2').click();
            page.getButton('add').click();
            page.getButton('2').click();
            page.getButton('decimal').click();
            page.getButton('3').click();
            page.getButton('equals').click();

            expect(page.getResult()).toEqual('3.5');
        });

        it('should perform subtraction of 2.7-1.1 = 1.6', () => {
            page.navigateTo();
            page.getButton('2').click();
            page.getButton('decimal').click();
            page.getButton('7').click();
            page.getButton('subtract').click();
            page.getButton('1').click();
            page.getButton('decimal').click();
            page.getButton('1').click();
            page.getButton('equals').click();

            expect(page.getResult()).toEqual('1.6');
        });

        it('should perform multiplication of 2.2x3.3 = 7.26', () => {
            page.navigateTo();
            page.getButton('2').click();
            page.getButton('decimal').click();
            page.getButton('2').click();
            page.getButton('multiply').click();
            page.getButton('3').click();
            page.getButton('decimal').click();
            page.getButton('3').click();
            page.getButton('equals').click();

            expect(page.getResult()).toEqual('7.26');
        });

        it('should perform division of 1.5/.5 = 3', () => {
            page.navigateTo();
            page.getButton('1').click();
            page.getButton('decimal').click();
            page.getButton('5').click();
            page.getButton('divide').click();
            page.getButton('decimal').click();
            page.getButton('5').click();
            page.getButton('equals').click();

            expect(page.getResult()).toEqual('3');
        });
    })
});
