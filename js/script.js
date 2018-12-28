function getValue() {
    'use strict';
    var display = document.getElementById('display'), captcha = document.getElementById('captcha').value;
    display.innerHTML = captcha;
}