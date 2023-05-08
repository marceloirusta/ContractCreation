

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("//input[@name='email']");
    }

    get inputPassword () {
        return $("//input[@name='password']");
    }

    get btnSubmit () {
        return $("//button[@data-qa='log-in']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await expect(this.inputUsername).toBeDisplayed()
        await expect(this.inputPassword).toBeDisplayed()
        await expect(this.btnSubmit).toBeDisplayed()
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
