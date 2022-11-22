import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("هواپیمایی شریف | پنل کاربری");
    }

    async getHtml() {
        return `
        <main class="mx-auto w-full max-w-[1200px] px-8">
            <h1>پنل کاربری</h1>
        </main>
        `;
    }
}