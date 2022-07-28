import {
    gameOfThrones, clickButton, linkToSubscribe, topTenSeries, buyingTickets, randomMovie,
} from "../locators/locators";

export class MainPage {
    static get searchInput(): string {
        return gameOfThrones;
    }

    static get searchButton(): string {
        return clickButton;
    }

    static get searchLink(): string {
        return linkToSubscribe;
    }

    static get searchMovieLink(): string {
        return topTenSeries;
    }

    static get searchBuyingTickets(): string {
        return buyingTickets;
    }

    static get findTheSearchButton(): string {
        return randomMovie;
    }
}