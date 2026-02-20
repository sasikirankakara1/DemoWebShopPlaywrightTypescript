import { Locator, Page } from "@playwright/test";

export class Search{

    readonly productNames:Locator
    readonly page:Page
    constructor(page:Page){
        this.page=page
        this.productNames=page.locator("div.product-item>div[class='details']>h2>a")
    }

    async displayItemDetails():Promise<string[]>{
        return await this.productNames.allTextContents()
    }
    async clickSpecificItem(name:string):Promise<void>{
      return this.productNames.filter({hasText:name}).click()
    
    }
}