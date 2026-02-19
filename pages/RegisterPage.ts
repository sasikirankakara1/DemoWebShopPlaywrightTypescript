import { Locator, Page } from "@playwright/test";

export class Register{
    readonly maleRadioButton:Locator
    readonly page:Page
    constructor(page:Page){
        this.page=page
        this.maleRadioButton = page.locator("#gender-male")
    }

    async clickGenderMale(){
        return await this.maleRadioButton.click()
    }
}