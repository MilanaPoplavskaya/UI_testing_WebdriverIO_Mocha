import { resultImage, resultSubscribe, resultRating, checkButton, resultOfRandom } from "../locators/locators";

export class ResultPage {
    static get result() {
        return resultImage;
    }

    static get subscribe() {
        return resultSubscribe;
    }

    static get text() {
        return resultRating;
    }

    static get resultOfButton() {
        return checkButton;
    }

    static get randomSearch() {
        return resultOfRandom;
    }
}