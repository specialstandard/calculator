import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }

    getResult() {
        return element(by.css('.screen')).getText();
    }

    getButton(val: string) {
        return element(by.css(`.btn-${val}`));
    }

}
