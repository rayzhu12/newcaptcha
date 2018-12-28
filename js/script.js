'use strict';
function getValue() {
    var display = document.getElementById('display'), captcha = document.getElementById('captcha').value;
    display.innerHTML = captcha;
}