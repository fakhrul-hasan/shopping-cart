document.getElementById('iphone-qty-plus').addEventListener('click',function(){
    const phoneQty = document.getElementById('phone-qty');
    const newIphoneQty = updateFieldNumber(phoneQty,true);

    updateIphonePriceTotal(newIphoneQty); 
    calculateSubTotal();
})

document.getElementById('iphone-qty-minus').addEventListener('click', function(){
    const phoneQty = document.getElementById('phone-qty');
    const newIphoneQty = updateFieldNumber(phoneQty,false);

    updateIphonePriceTotal(newIphoneQty);
    calculateSubTotal();
})

document.getElementById('case-qty-plus').addEventListener('click',function(){
    const caseQty = document.getElementById('case-qty');
    const newCaseQty = updateFieldNumber(caseQty,true);

    updateCasePriceTotal(newCaseQty);
    calculateSubTotal();
})

document.getElementById('case-qty-minus').addEventListener('click', function(){
    const caseQty = document.getElementById('case-qty');
    const newCaseQty = updateFieldNumber(caseQty,false);

    updateCasePriceTotal(newCaseQty);
    calculateSubTotal();
})