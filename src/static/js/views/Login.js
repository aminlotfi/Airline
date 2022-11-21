import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("لاگین");
    }

    async getHtml() {
        return `
        <main class="mx-auto w-full max-w-[1200px] px-8">
            <h1>لاگین</h1>
        </main>
        `;
    }
}