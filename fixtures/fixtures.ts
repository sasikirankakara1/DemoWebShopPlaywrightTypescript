import { test as base,expect } from "@playwright/test";
import { DemoWebShopHomePage } from "../pages/DemoWebShopHomePage";
import { Register } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { Search } from "../pages/SearchPage";
import { ItemsDisplays } from "../pages/ItemsDisplay";

type myFixtures = {

    demowebshophomepage:DemoWebShopHomePage
    register:Register
    login:LoginPage
    search:Search
    items:ItemsDisplays
}

export const test = base.extend<myFixtures>({
    demowebshophomepage: async({page},use)=>{
        await use(new DemoWebShopHomePage(page))
    },
    register: async({page},use)=>{
        await use(new Register(page))
    },
    login:async({page},use)=>{
        await use(new LoginPage(page))
    },
    search:async({page},use)=>{
        await use(new Search(page))
    },
    items:async ({page},use)=>{
        await use(new ItemsDisplays(page))
    }
})

export {expect} from '@playwright/test'