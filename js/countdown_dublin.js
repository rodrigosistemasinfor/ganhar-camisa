var endDate = new Date("Jun 9, 2019 17:35:00").getTime();
var d = new Date();
var n = d.getTime();
var timer = setInterval(function () {

    let t = endDate - n;

    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("timer-days").innerHTML = days +
        "<span>DAY(S)</span>";
    document.getElementById("timer-hours").innerHTML = ("0" + hours).slice(-2) +
        "<span>HR(S)</span>";
    document.getElementById("timer-mins").innerHTML = ("0" + mins).slice(-2) +
        "<span>MIN(S)</span>";
    document.getElementById("timer-secs").innerHTML = ("0" + secs).slice(-2) +
        "<span>SEC(S)</span>";

    if (t < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "The countdown is over!";
    }
}, 1000);