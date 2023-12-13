function updateTime() {
    // London
    let londonElement = document.querySelector("#london");
    let londonDateElemnet = londonElement.querySelector(".date");
    let londonTimeElemnet = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElemnet.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElemnet.innerHTML = londonTime.format(
        "h:mm:ss:SS [<small>]A[</small>]"
    );


    // Milan
    let milanElement = document.querySelector("#milan");
    let milanDateElemnet = milanElement.querySelector(".date");
    let milanTimeElemnet = milanElement.querySelector(".time");
    let milanTime = moment().tz("Europe/Rome");

    milanDateElemnet.innerHTML = milanTime.format("MMMM Do YYYY");
    milanTimeElemnet.innerHTML = milanTime.format(
        "h:mm:ss:SS [<small>]A[</small>]"
    );



    // New York
    let newYorkElement = document.querySelector("#new-york");
    let newYorkDateElemnet = newYorkElement.querySelector(".date");
    let newYorkTimeElemnet = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");



    newYorkDateElemnet.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElemnet.innerHTML = newYorkTime.format(
        "h:mm:ss:SS [<small>]A[</small>]"
    );
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("Acre", "Rio de Janeiro").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss:")}<small> ${cityTime.format("A")}</small>
            </div >
    `;
}


updateTime();
setInterval(updateTime, 1);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);