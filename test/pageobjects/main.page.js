import Page from './page.js';

class MainPage extends Page{

    get createContractBt(){
        return $("//div[text()='Create A Contract']")
    }
    
}

export default new MainPage();