function updateFieldNumber(fieldQty,isIncrease){
    const fieldQtyString = fieldQty.value;
    const fieldQtyValue = parseInt(fieldQtyString);
    let fieldNewQty;

    if(isIncrease === true){
       fieldNewQty = fieldQtyValue + 1;
    }
    else{
       fieldNewQty = fieldQtyValue - 1;
    }
    fieldQty.value = fieldNewQty;
    return fieldNewQty;
}

function updateIphonePriceTotal(qty){
    const iPhoneTotalPrice = qty * 1219;
    const iphonePriceElement = document.getElementById('iphone-price');
    iphonePriceElement.innerText = iPhoneTotalPrice;
    return iPhoneTotalPrice;
}

function updateCasePriceTotal(qty){
    const caseTotalPrice = qty * 59;
    const casePriceElement = document.getElementById('case-price');
    casePriceElement.innerText = caseTotalPrice;
}

function setElementById(elementId,value){
    const totalElement = document.getElementById(elementId);
    totalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = parseFloat(document.getElementById('iphone-price').innerText);
    const currentCaseTotal = parseFloat(document.getElementById('case-price').innerText);

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setElementById('sub-total',currentSubTotal);

    const taxAmount = parseFloat((currentSubTotal * 0.1).toFixed(2));
    setElementById('tax-total',taxAmount);

    const finalTotal = currentSubTotal + taxAmount;
    setElementById('final-total',finalTotal);
}