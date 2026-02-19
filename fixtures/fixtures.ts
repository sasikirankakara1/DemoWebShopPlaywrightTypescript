import { test as base,expect } from "@playwright/test";
import { DemoWebShopHomePage } from "../pages/DemoWebShopHomePage";

type myFixtures = {

    demowebshophomepage:DemoWebShopHomePage
}

export const test = base.extend<myFixtures>({
    demowebshophomepage: async({page},use)=>{
        await use(new DemoWebShopHomePage(page))
    }
})

export {expect} from '@playwright/test'