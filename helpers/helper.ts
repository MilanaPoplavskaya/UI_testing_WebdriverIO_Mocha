export const getWebElement = async (elementLocator: string): Promise<WebdriverIO.Element> => {
    const webElement = await $(elementLocator);
    await webElement.waitForExist({ timeout: 5000, reverse: false });
    return webElement;
};