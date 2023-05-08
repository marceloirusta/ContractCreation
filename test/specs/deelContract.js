import LoginPage from '../pageobjects/login.page.js'
import MainPage from '../pageobjects/main.page.js'
import ContractPage from '../pageobjects/contract.page.js'
import moment from 'moment';

const previousDate = moment().subtract(1, "days").format("MM/DD/YYYY");

describe('Deel contract page', () => {
    it('should create a fixed contract with valid parameters', async () => {
        await LoginPage.open()

        await LoginPage.login('mirustac@hotmail.com', '3uacCGsPUQffaQY_')

        await MainPage.createContractBt.click()

        await ContractPage.fixedRateContractBt.click()

        await ContractPage.fillForm("Contract Name", "bolivia", "The scope of work", previousDate, "gbp", 1000, "The special clause")

        await expect($("//p[text()='Waiting For Client Sign']").toBeDisplayed())
    })
})



