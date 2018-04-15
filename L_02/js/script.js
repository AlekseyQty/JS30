var onOff;

change();

function updateTime() {
    var hourObj = new Date();
    var minuteObj = new Date();
    var secondObj = new Date();
    var hour = hourObj.getHours();
    var minute = minuteObj.getMinutes();
    var second = secondObj.getSeconds();

    var hourPointer = document.getElementsByClassName('big')[0];
    var minutePointer = document.getElementsByClassName('medium')[0];
    var secondPointer = document.getElementsByClassName('small')[0];

    const secondDegrees = ((second/60)*360) + 90;
    hourPointer.style.transform = `rotate(${hour*15 +90 +minute*6/15}deg)`;
    minutePointer.style.transform = `rotate(${minute*6 +90}deg)`;
    secondPointer.style.transform = `rotate(${secondDegrees}deg)`;
}

function change() {
    if (!onOff) {
        onOff = window.setInterval(updateTime,1000);
    }
    else {
        window.clearInterval(onOff);
        onOff = null;
    }
}


