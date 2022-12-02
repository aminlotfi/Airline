import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("هواپیمایی شریف | لیست بلیط‌ها");
    }

    async getJs() {
        let url = document.location.href,
            params = url.split('?')[1].split('&'),
            data = {}, tmp;
        for (let i = 0, l = params.length; i < l; i++) {
            tmp = params[i].split('=');
            data[tmp[0]] = tmp[1];
        }

        document.querySelector('#data').innerHTML = JSON.stringify(data, undefined, 4)
    }

    async getHtml() {
        return `
        <main class="mx-auto w-full max-w-[1200px] px-8">
            <h1>صفحه‌ی لیست بلیط‌ها</h1>
            <pre class="dir-ltr" id="data"></pre>
        </main>
        `;
    }
}