function getValue() {
    var display = document.getElementById('display');
    var captcha = document.getElementById('captcha').value;
    display.innerHTML=captcha;
}