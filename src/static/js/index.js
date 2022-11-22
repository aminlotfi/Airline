import Landing from "./views/Landing.js";
import TicketsList from "./views/TicketsList.js";
import BuyTicket from "./views/BuyTicket.js";
import Signup from "./views/Signup.js";
import Login from "./views/Login.js";
import Panel from "./views/Panel.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Landing },
        { path: "/ticket-list", view: TicketsList },
        { path: "/buy-ticket", view: BuyTicket },
        { path: "/login", view: Login },
        { path: "/signup", view: Signup },
        { path: "/panel", view: Panel }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });


    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: [location.pathname]
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});