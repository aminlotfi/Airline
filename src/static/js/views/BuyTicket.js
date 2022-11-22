import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("هواپیمایی شریف | خرید بلیط");
    }

    async getHtml() {
        return `
        <main class="mx-auto w-full max-w-[1200px] px-8">
            <h1>صفحه‌ی خرید بلیط</h1>
        </main>
        `;
    }
}