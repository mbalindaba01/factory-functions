//get a reference to the billString
var billString = document.querySelector('.billString');

//get a reference to the calculate button
var calculateBtn = document.querySelector('.calculateBtn');

//get a reference to the total 
var calcBillTotal = document.querySelector('.billTotal');

//create instance of factory function
var calcBill = BillWithString();

//create the function that will be called when the calculate button is pressed
function calculateBill() {
    calcBill.setInputString(billString.value);
    calcBill.getInputString();
    calcBill.splitString();
    calcBillTotal.innerHTML = calcBill.getTotalCost().toFixed(2);
    calcBillTotal.classList.remove(calcBill.removeWarningClasses());
    calcBillTotal.classList.add(calcBill.addWarningClasses());
}


//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', calculateBill);