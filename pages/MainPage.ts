export class MainPage {
    static get searchInput(): string {
        return '[name="kp_query"]';
    }
    static get searchButton(): string {
        return '[href="/film/464963/sr/2/"]';
    }
    static get searchLink(): string {
        return 'a.styles_root__OkfMY';
    }
    static get searchMovieLink(): string {
        return '[href="/film/571335/sr/2/"]';
    }
    static get searchBuyingTickets(): string {
        return '//h3[contains(@class,"film-page-section-title")]//a[text()="Билеты в кино"]';
    }
    static get findTheSearchButton(): string {
        return 'svg.search-form-submit-button__icon';
    }
}