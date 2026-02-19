import { Locator, Page } from "@playwright/test";

export class Register{
    readonly maleRadioButton:Locator
    readonly femaleRadioButton: Locator
    readonly firstName:Locator
    readonly page:Page
    readonly registerBtn:Locator
    constructor(page:Page){
        this.page=page
        this.maleRadioButton = page.locator("#gender-male")
        this.femaleRadioButton = page.locator("#gender-female")
        this.firstName=page.locator("#FirstName")
        this.registerBtn = page.locator("#register-button")
    }

    async clickGenderMale(){
        return await this.maleRadioButton.click()
    }
    async setFirstName(name:string){
        return await this.firstName.fill(name)
    }
    async clickRegister(){
        return await this.registerBtn.click()
    }
}