import { Locator, Page } from "@playwright/test";

export class DemoWebShopHomePage{

    readonly register:Locator
    readonly page:Page
    constructor(page:Page){
        this.page=page
        this.register = page.locator("a[href*='/register']")
    }
    async clickRegister(){
        return await this.register.click()
    }
    async gotoPage(url:string){
        return  this.page.goto(url)
    }
}

