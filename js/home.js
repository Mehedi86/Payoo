document.getElementById('add-money-button').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmountNumber = document.getElementById('amount-input').value;
    const inputPinNumber = document.getElementById('pin-input').value;

    if (inputPinNumber === '1234') {
        let balance = document.getElementById('total-balance').innerText;
        let newBalance = parseFloat(balance) + parseFloat(inputAmountNumber);
        document.getElementById('total-balance').innerText = newBalance;
    }
    else {
        alert('invalid pin');
    }
});

document.getElementById('cash-out-button').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutInput = document.getElementById('cash-out-amount-input').value;
    const cashOutInputNumber = parseFloat(cashOutInput);
    const cashOutPin = document.getElementById('cashout-pin-input').value;
    
    if(cashOutPin === '1234'){
        const balance = document.getElementById('total-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balance - cashOutInputNumber;
        document.getElementById('total-balance').innerText = newBalance;
    }
    else{
        alert('invalid pin');
    }
});

document.getElementById('add-money-toggle-button').addEventListener('click', function(){
    const addMoney = document.getElementById('form-add-money').classList;
    const cashOut  = document.getElementById('form-cash-out').classList;
    addMoney.remove('hidden');
    cashOut.add('hidden');

})
document.getElementById('cash-out-toggle-button').addEventListener('click', function(){
    const addMoney = document.getElementById('form-add-money').classList;
    const cashOut  = document.getElementById('form-cash-out').classList;
    addMoney.add('hidden');
    cashOut.remove('hidden');

})