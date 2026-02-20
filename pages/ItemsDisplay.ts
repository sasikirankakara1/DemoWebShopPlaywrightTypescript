import { Locator, Page } from "@playwright/test";

export class ItemsDisplays{
    readonly recipientName:Locator
    readonly recipientEmail:Locator
    readonly message:Locator
    readonly page:Page
    readonly quantity:Locator
    readonly inputs:Locator
    readonly links:Locator
    readonly buttons:Locator
    readonly terms:Locator
    constructor(page:Page){
        this.page=page
        this.recipientName=page.locator("#giftcard_1_RecipientName")
        this.recipientEmail = page.locator("#giftcard_1_RecipientEmail")
        this.message = page.locator("#giftcard_1_Message")
        this.quantity = page.locator("#addtocart_1_EnteredQuantity")
        this.inputs = page.locator("input")
        this.links = page.locator("a")
        this.buttons = page.locator("button")
        this.terms = page.locator("#termsofservice")
    }

    async setRecipientName(name:string):Promise<void>{
        return this.recipientName.fill(name)
    }
    async setRecipientEmail(mail:string):Promise<void>{
        return this.recipientEmail.fill(mail)
    }
    async setMessage(text:string){
        return this.message.fill(text)
    }
    async setQuantity(num:string){
        this.quantity.clear()
        return this.quantity.fill(num)
    }

    async clickSpecificButton(buttonName:string):Promise<void>{
        return this.inputs.filter({hasText:buttonName}).first().click()
        
    }
    async clickSpecificLinks(linkName:string):Promise<void>{
        return this.links.filter({hasText:linkName}).first().click()
    }
    
    async clickSpecificButtons(btnName:string):Promise<void>{
        return this.buttons.filter({hasText:btnName}).click()
    }
    async clickAgreements():Promise<void>{
        return this.terms.click()
    }

}