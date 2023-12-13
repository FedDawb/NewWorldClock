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

updateTime();
setInterval(updateTime, 1);