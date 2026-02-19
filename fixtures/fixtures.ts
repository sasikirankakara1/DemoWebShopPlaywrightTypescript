import { test as base,expect } from "@playwright/test";
import { DemoWebShopHomePage } from "../pages/DemoWebShopHomePage";
import { Register } from "../pages/RegisterPage";

type myFixtures = {

    demowebshophomepage:DemoWebShopHomePage
    register:Register
}

export const test = base.extend<myFixtures>({
    demowebshophomepage: async({page},use)=>{
        await use(new DemoWebShopHomePage(page))
    },
    register: async({page},use)=>{
        await use(new Register(page))
    }
})

export {expect} from '@playwright/test'