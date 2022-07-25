import { MainPage } from "../pages/MainPage";
import { ResultPage } from "../pages/ResultPage";
import { getWebElement } from "../helpers/helper";
import { URL } from "./URL";

describe("kinopoisk.ru testing", () => {
    beforeEach(async () => {
        await browser.url(URL);
    });

    it("Check input field", async () => {
        await (await getWebElement(MainPage.searchInput)).setValue("Игра престолов");
        await (await getWebElement(MainPage.searchButton)).click();
        const checkResult = await (await getWebElement(ResultPage.result));
        await expect(await checkResult.isDisplayed());
    });
    it("Check the subscription link", async () => {
        await (await getWebElement(MainPage.searchLink)).click();
        const checkButton = await (await getWebElement(ResultPage.subscribe));
        await expect(await checkButton.isEnabled());
    });
    it("Check getText", async () => {
        await (await getWebElement(MainPage.searchInput)).setValue("Бесстыжие");
        await (await getWebElement(MainPage.searchMovieLink)).click();
        const checkText = await (await getWebElement(ResultPage.text)).getText();
        await expect(checkText).toContain("8 место");
    });
    it("Check buying tickets", async () => {
        await (await getWebElement(MainPage.searchBuyingTickets)).click();
        const checkClickable = await (await getWebElement((ResultPage.resultOfButton)));
        await expect(await checkClickable.isClickable());
    });
    it("Check random search", async () => {
        await (await getWebElement(MainPage.findTheSearchButton)).click();
        const checkRandomSearch = await (await getWebElement(ResultPage.randomSearch));
        await expect(await checkRandomSearch.isExisting());
    });
});