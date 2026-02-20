import { test, expect } from "../fixtures/fixtures";
import gift from '../test-data/giftcard.json'
test.describe("Demo Web Shop", () => {
  test.beforeEach(async ({ demowebshophomepage }) => {
    await demowebshophomepage.gotoPage("/");
  });
  test("Demo Web Shop Home UI Automation", async ({
    demowebshophomepage,
    register,
  }) => {
    console.log(await demowebshophomepage.page.title());
    expect(await demowebshophomepage.page).toHaveTitle(
      "Demo Web Shop. Register",
    );
    await demowebshophomepage.clickRegister();
    await register.clickGenderMale();
    await register.setFirstName("Hellos");
    await register.setLastName("World");
    await register.setEmail("Hello123456s@gmail.com");
    await register.setPassword("Ones@123456");
    await register.setConfirmPassword("Ones@123456");
    await register.clickRegister();
    // console.log(await register.getMessage)
    // expect(await register.getMessage).toBe("Last name is required")
    await demowebshophomepage.page.pause();
  });
  test.describe("@smoke", () => {
    test.only("Demo Web Shop Home UI Automations", async ({
      login,
      demowebshophomepage,
      search,
      items,
    }) => {
      await demowebshophomepage.clickLogin();
      await login.login(process.env.USER_EMAIL!,process.env.USER_PASS!);
      expect(await login.userNameInfo).toBe(process.env.USER_EMAIL!);
      await login.setSearch(gift.searchTerm);
      await search.clickSpecificItem(gift.productName);
      await items.setRecipientName(gift.recipientName);
      await items.setRecipientEmail(gift.recipientEmail);
      await items.setMessage(gift.message);
      await items.setQuantity(gift.quantity);
      await items.clickSpecificButton("Add to cart");
      await items.clickSpecificLinks("Shopping cart");
      await items.clickAgreements();
      await items.clickSpecificButtons("Checkout");
      await login.page.pause();
    });
  });
});
