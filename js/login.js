document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('number-field').value;
    const pinNumber = document.getElementById('pin-field').value;

    if (phoneNumber === 'phone' && pinNumber === '1234') {
        window.location.href = '/home.html'
    }
    else {
        alert('Wrong phone or pin')
    }
})