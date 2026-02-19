import { test,expect } from "../fixtures/fixtures";

test.describe('Demo Web Shop',()=>{
  test.beforeEach(async({demowebshophomepage})=>{
   await demowebshophomepage.gotoPage("/")
  })
  test('Demo Web Shop Home UI Automation',async({demowebshophomepage,register})=>{
    console.log(await demowebshophomepage.page.title())
    expect(demowebshophomepage.page).toHaveTitle('Demo Web Shop. Register')
    await demowebshophomepage.clickRegister()
    await register.clickGenderMale()
    await register.setFirstName("Hellos")
    await register.clickRegister()
    console.log(await register.getMessage)
    expect(await register.getMessage).toBe("Last name is required.")
    await demowebshophomepage.page.pause()
  })
})