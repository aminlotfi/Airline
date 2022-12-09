import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("هواپیمایی شریف | خرید بلیط");
    }

    async getJs() {
        const origin = document.querySelector("#origin");
        const destination = document.querySelector("#destination");
        const flyTime = document.querySelector('#fly_time');
        const arrivalTime = document.querySelector('#arrival_time');
        const duration = document.querySelector('#duration');
        const airlineLogo1 = document.querySelector('#airlineLogo1');
        const airlineName1 = document.querySelector('#airlineName1');
        class time {
            constructor (h, m) {
                this.h = h;
                this.m = m;
            }
            getH () {
                return this.h;
            }
            getM () {
                return this.m;
            }
            getString (num) {
                var r = "" + num;
                while (r.length < 2) {
                  r = "0" + r;
                }
                return r;
            }
            getTime () {
                return this.getString(this.h)+":"+this.getString(this.m);
            }
        }
        var flight = {
            originCity: "تهران",
            originAirport: "مهرآباد",
            flyTime: new time(13, 0),
            arrivalTime: new time(14, 30),
            flyDate: "۲۰ آذر ۱۴۰۱",
            arrivalDate: "۲۰ آذر ۱۴۰۱",
            destinationCity: "مازندران",
            destinationAirport: "ساری",
            passengers: 2,
            costPerPassenger: 4000000,
            airlineName: "شرکت هواپیمایی شریف",
            airlineNameShort: "شریف",
            airlineLogo: "/static/img/logo.png",
            getDuration: function() {
                if (flight.flyTime.getM() <= flight.arrivalTime.getM()) {
                    return new time(flight.arrivalTime.getH()-flight.flyTime.getH(),
                    flight.arrivalTime.getM()-flight.flyTime.getM()).getTime();
                } else {
                    return new time(flight.arrivalTime.getH()-flight.flyTime.getH()-1,
                    60+flight.arrivalTime.getM()-flight.flyTime.getM()).getTime();
                }
            },
            getCost: function () {
                return this.costPerPassenger * this.passengers;
            }
        };
        function setOrigin() {
            origin.innerHTML = flight.originCity;
        }
        function setDest() {
            destination.innerHTML = flight.destinationCity;
        }
        function setFlyTime() {
            flyTime.innerHTML = flight.flyTime.getTime();
        }
        function setArrivalTime() {
            arrivalTime.innerHTML = flight.arrivalTime.getTime();
        }
        function setDuration() {
            duration.innerHTML = flight.getDuration();
        }
        function setAirlineInfo() {
            airlineLogo1.setAttribute("src", flight.airlineLogo);
            airlineName1.innerHTML = flight.airlineNameShort;
        }
        setOrigin();
        setDest();
        setFlyTime();
        setArrivalTime();
        setDuration();
        setAirlineInfo();
    }

    async getHtml() {
        let theHtml = `
        <main class="mx-auto w-full max-w-[1200px] px-8">
            <h1>صفحه‌ی خرید بلیط</h1>
            <table name="the_page" class="w-full border-2 border-red-400">
                <tr class="border-2">
                    <td class="border-2">
                        <table name="flight_info_brief" class="text-center items-center">
                        <tr class="m-2 items-center">
                            <td class="items-center px-2">
                                <img id="airlineLogo1" src="" class="w-40 place-self-center bg-gray-300"/>
                            </td>
                            <td class="w-min" id="origin">
                            </td>
                            <td class="text-gray-400 pt-2 pb-0" id="duration">00:00</td>
                            <td class="w-min" id="destination">maghsad</td>
                        </tr>
                        <tr class="">
                            <td id="airlineName1" class="px-2 text-xs font-semibold pb-2 pt-0">
                                airline
                            </td>
        
                            <td class="px-4">
                                <span id="fly_time" class="font-bold pb-2 pt-0">00:00</span>
                                
                            
                            </td>
                            <td class="pb-2 pt-0">
                                <span class="stops flex grow items-center justify-between text-grays-200 w-min">
                                <svg viewBox="0 0 24 24" width="1rem" height="1rem" fill="#a1a1aa"><path d="M.601 12.008c0 .929.297 1.545 1.003 1.857.392.172.802.226 1.46.22l.362-.009 5.656-.24.26.368.326.493.42.659.87 1.41 1.573 2.626 1.678 2.855a2.204 2.204 0 0 0 1.858 1.155.9.9 0 0 0 .878-1.198l-3.018-8.582c-.008-.021-.002-.03.006-.03l6.447-.29.79 2.114.035.13c.257.593.77.862 1.287.761.61-.12 1.008-.711.889-1.322l-.005-.09.009-5.947c.05-.488-.338-1.007-.9-1.12-.546-.107-1.029.189-1.246.665l-.832 2.22-6.446-.29a.013.013 0 0 1-.011-.017l3.179-8.595a.9.9 0 0 0-.92-1.209l-.161.014c-.69.02-1.352.4-1.754 1.013L12.426 4.8l-1.21 2.02-.8 1.308-.54.86-.45.693-.238.347-.107.149-5.602-.264h-.623l-.16.007-.206.016c-1.287.127-1.889.767-1.889 2.072Z" fill-rule="evenodd"></path></svg>
                                <span class="stops__point" data-v-355fb152=""></span>
                                <hr class="w-60 bg-light border-slate-900 bg-slate-200">
                            </td>
                            <td class = "px-4  pb-2 pt-0">
                                <span id="arrival_time" class="font-bold  pb-2 pt-0">00:00</span>
                                </span>
                            </td>
                        <tr>
                    </table>
                    </td>
            
                    <td class="border-2 w-1/4" rowspan="2">2</td></tr>
                <tr class="border-2">
                    <td class="border-2" rowspan="2">
                        3
                    </td>
                </tr>
            </table>
            
        </main>
        `;
        return theHtml;
    }
}