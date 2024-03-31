document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositFieldString = depositField.value;
    const newDepositAmount = parseFloat(depositFieldString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount
    
    balanceTotalElement.innerText = currentBalanceTotal
    depositTotalElement.innerText = currentDepositTotal

    depositField.value = '';
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);

    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please enter e valid Number')
        return;
    }
    

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount

    if(newWithdrawAmount > previousBalanceTotal){
        alert('there has no sufficient balance to withdraw')
        return
    }

    balanceTotalElement.innerText = currentBalanceTotal
    withdrawTotalElement.innerText = currentWithdrawTotal;

    
})