import Page from './page.js';

class ContractPage extends Page{

    get fixedRateContractBt(){
        return $("//h4[text()='Fixed Rate']")
    }
    
    get contractNameTb(){
        return $("//input[@placeholder='Untitled contract']")
    }

    get contractorTaxResidenceTb(){
        return $("//label[contains(text(), 'tax residence')]/following-sibling::div/input")
    }

    get contractorTaxResidenceAc(){
        return $("//div[text()='All']/following-sibling::*")
    }

    get seniorityLevelTb(){
        return $("//label[contains(text(), 'level')]/following-sibling::div/input")
    }

    get midSeniorityAc(){
        return $("//div[contains(text(), 'Level 2')]")
    }

    get scopeOfWorkTb(){
        return $("#scope-of-work-creation")
    }

    get contractorStartDateTb(){
        return $("//input[@name='effectiveDate']")
    }

    get nextBt(){
        return $("//button[@data-qa='next']")
    }

    get currencyTb(){
        return $("//div[@data-qa='currency-select']/div/div/div/following-sibling::div/div/input")
    }

    get currentcyAc(){
        return $("//div[@data-qa='currency-select']/following-sibling::div/div/div")
    }

    get currencyValueTb(){
        return $("//span[@class='money-input-new-input-container']/div/div/input")
    }

    get paymentFrecuencyTb(){
        return $("//div[@data-qa='cycle-select']/div/div/div/div/input")
    }

    get paymentFrecuencyAc(){
        return $("//div[text()='Weekly']")
    }

    get addSpecialClauseBt(){
        return $("//div[@data-qa='special-clause-card']/div/div/button")
    }

    get specialClauseTb(){
        return $("//div[@data-qa='special-clause-card']/div/div[2]/div/div/div/textarea")
    }

    get createContractBt(){
        return $("//button[@data-qa='create-contract']")
    }

    async fillForm (contractName, taxResidence, scopeOfWork, startDate, currency, currencyValue, specialClause) {
        await expect(this.contractNameTb).toBeDisplayed()
        await this.contractNameTb.setValue(contractName);
        await this.contractorTaxResidenceTb.click();
        await this.contractorTaxResidenceTb.setValue(taxResidence);
        await this.contractorTaxResidenceAc.click();
        await this.seniorityLevelTb.click();
        await this.midSeniorityAc.click();
        await this.scopeOfWorkTb.setValue(scopeOfWork);
        await browser.scroll(0, 300)
        await this.contractorStartDateTb.click();
        await this.contractorStartDateTb.addValue(startDate);
        await this.nextBt.click();

        await expect(this.currencyTb).toBeDisplayed()
        await this.currencyTb.click();
        await this.currencyTb.setValue(currency);
        await this.currentcyAc.click();
        await this.currencyValueTb.setValue(currencyValue)
        await this.paymentFrecuencyTb.click()
        await this.paymentFrecuencyAc.click()
        await this.nextBt.click()

        await browser.scroll(0, 300)
        await browser.pause(7000)
        await expect(this.nextBt).toBeDisplayed()
        await this.nextBt.click()

        await expect(this.addSpecialClauseBt).toBeDisplayed()
        await this.addSpecialClauseBt.click()
        await this.specialClauseTb.setValue(specialClause)
        await browser.scroll(0, 200)
        await this.nextBt.click()

        await expect(this.createContractBt).toBeDisplayed()
        await this.createContractBt.click()
    }
}

export default new ContractPage();