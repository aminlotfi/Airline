// TODO Redundant component, just for testing
import AbstractView from "../views/AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Alert");
    }

    async getJs(props, uniqueKey) {
        console.log(props, uniqueKey);
        let alert = document.querySelector(`#alert-${uniqueKey}`)

        alert.innerHTML = props['data-caption']

        alert.addEventListener('click', (e) => {
            window.navigateTo('/buy-ticket')
        })
        console.log("Alert")

        // For multiple tickets cards
        // let alertWrapper = document.querySelector("#alert-wrapper")
        // alertWrapper.innerHTML = [...Array(5)].map((_, i) => {
        //     return `<AlertComponent data-caption="Ticket ${i + 1}"></AlertComponent>`
        // }).join("")
    }

    async getHtml(uniqueKey) {
        return `
          <h1 id="alert-${uniqueKey}">Alert</h1>
        `;
    }
}