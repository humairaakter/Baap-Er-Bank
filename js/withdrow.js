// 1. add event handler eith the withdrow button
// 2. get the withdrow amount from the withdrow input field
// 2.5 : also make sure to convert the input into a number by using parseFloat
// 3.get privious withdrow total
// 4. calculate total withdrow amount
// 4-5. set total withdrow amount
// 5. get the previous balance total
// 6. calculate new balance total
// 6.5 : set the new balance total

// 7. clear the input field

// step-1
document.getElementById('btn-Withdrow').addEventListener('click', function () {
    //  step-2
    const withdrowField = document.getElementById('withdrow-field');
    const newWithdrowAmountString = withdrowField.value;
    const newWithdrowAmount = parseFloat(newWithdrowAmountString);


    //    step-3
    const withdrowTotalElement = document.getElementById('withdrow-total');
    const previousWithdrowTotalString = withdrowTotalElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);


    // step-4
    const currentWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
    withdrowTotalElement.innerText = currentWithdrowTotal;

    //   step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step-7
    withdrowField.value = '';
})