// input-field-one
document.getElementById('input-btn-one')
    .addEventListener('click', function(event){
        event.preventDefault();
        const addMoney = getInputFieldValue('input-field-one');
        
        if(addMoney <= 0 || isNaN(addMoney)){
            document.getElementById('error-input-field-one').classList.remove('hidden');
            return;
        }

        const inputOneTotalAmount =getTextFieldValue ('input-one-total-amount');
        const totalAmount = addMoney + inputOneTotalAmount;
        document.getElementById('input-one-total-amount').innerText = totalAmount;

        const mainTotalBalance = getTextFieldValue('main-balance');
        const mainBalance = mainTotalBalance - addMoney;
        document.getElementById('main-balance').innerText = mainBalance;
        
    });
// input-field-two
document.getElementById('input-btn-two')
    .addEventListener('click', function(event){
        event.preventDefault();
        const addMoneyInputTwo = getInputFieldValue('input-field-two');
        if(addMoneyInputTwo <= 0 || isNaN(addMoneyInputTwo)){
            document.getElementById('error-input-field-two').classList.remove('hidden');
            return;
        }

        const inputTwoTotalAmount = getTextFieldValue('input-two-total-amount');
        const accountBalance = addMoneyInputTwo + inputTwoTotalAmount;

        document.getElementById('input-two-total-amount').innerText = accountBalance;

        const mainTotalBalance = getTextFieldValue('main-balance');
        const mainBalance = mainTotalBalance - addMoneyInputTwo;
        document.getElementById('main-balance').innerText = mainBalance;

    });
// input-field-three
document.getElementById('input-btn-three')
    .addEventListener('click', function(event){
        event.preventDefault();
        const addMoneyInputThree = getInputFieldValue('input-field-three');
        if(addMoneyInputThree <= 0 || isNaN(addMoneyInputThree)){
            document.getElementById('error-input-field-three').classList.remove('hidden');
            return;
        }

        const cardOneTotalAmount = getTextFieldValue('card-three-total-amount');
        const cardThreeAccountBalance = addMoneyInputThree + cardOneTotalAmount;
        
        document.getElementById('card-three-total-amount').innerText = cardThreeAccountBalance;

        const mainTotalBalance = getTextFieldValue('main-balance');
        const mainBalance = mainTotalBalance - addMoneyInputThree;
        document.getElementById('main-balance').innerText = mainBalance;

    })

    