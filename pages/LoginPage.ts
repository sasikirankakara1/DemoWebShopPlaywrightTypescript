import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly email:Locator
    readonly page:Page
    readonly password:Locator
    readonly rememberOnly:Locator
    readonly loginBtn:Locator
    readonly userName:Locator
    readonly searchBox:Locator
    readonly searchBtn:Locator

    constructor(page:Page){
        this.page = page
        this.email = page.locator("#Email")
        this.password = page.locator("#Password")
        this.rememberOnly = page.locator("#RememberMe")
        this.loginBtn = page.locator("input[value='Log in']")
        this.userName = page.locator("div.header-links-wrapper>div>ul>li>a[href*='/customer/info']")
        this.searchBox = page.locator("#small-searchterms")
        this.searchBtn = page.locator("input.button-1.search-box-button")
    }

    async login(emailid:string,passcode:string){
        await this.email.fill(emailid)
        await this.password.fill(passcode)
        await this.loginBtn.click()
    }
    get userNameInfo(){
        return this.userName.textContent()
    }
    async setSearch(text:string){
        await this.searchBox.fill(text)
        await this.searchBtn.click()
    }
}