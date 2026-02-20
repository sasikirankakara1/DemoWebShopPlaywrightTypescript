import { Locator, Page } from "@playwright/test";

export class DemoWebShopHomePage{

    readonly register:Locator
    readonly page:Page
    readonly login:Locator
    constructor(page:Page){
        this.page=page
        this.register = page.locator("a[href*='/register']")
        this.login = page.locator("a[href*='\login']")
    }
    async clickRegister(){
        return await this.register.click()
    }
    async gotoPage(url:string){
        return  this.page.goto(url)
    }
    async clickLogin(){
        return await this.login.click()
    }
  
}

