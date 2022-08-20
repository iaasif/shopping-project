function updateCaseNumber(isIncrease) {
    const caseNumberFiled = document.getElementById('case-number-field');
    const caseNumberString = caseNumberFiled.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;

    if (isIncrease == true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberFiled.value = newCaseNumber;
    return newCaseNumber;

}


function updateTotalCasePrice(newCaseNumber) {

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;

}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateTotalCasePrice(newCaseNumber);
    calculateSubTotal();

});


document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateTotalCasePrice(newCaseNumber);
    calculateSubTotal();
})