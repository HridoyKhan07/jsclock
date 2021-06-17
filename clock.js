function showTime() {

    var time = new Date();
    var hu_12 = time.getHours();
    if (hu_12 > 12)
        hu_12 %= 12;

    var minute, second;
    minute = time.getMinutes();
    second = time.getSeconds();
    if (hu_12 < 10)
        hu_12 = "0" + hu_12;
    if (minute < 10)
        minute = "0" + minute;
    if (second < 10)
        second = "0" + second;
    document.getElementById("hour").innerHTML = hu_12 + ":" + minute + ":" + second;
    setInterval(showTime, 1000);
}
showTime();