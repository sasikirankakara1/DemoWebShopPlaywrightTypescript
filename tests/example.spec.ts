import { test,expect } from "../fixtures/fixtures";

test.describe('Demo Web Shop',()=>{
  test.beforeEach(async({demowebshophomepage})=>{
   await demowebshophomepage.gotoPage("/")
  })
  test('Demo Web Shop Home UI Automation',async({demowebshophomepage})=>{
    console.log(await demowebshophomepage.page.title())
    expect(demowebshophomepage.page).toHaveTitle('Demo Web Shop. Register')
    await demowebshophomepage.clickRegister()
    await demowebshophomepage.page.pause()
  })
})