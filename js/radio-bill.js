//reference to the button
let radioBillAddBtn = document.querySelector('.radioBillAddBtn')

//reference to the smsTotal
let smsTotalTwo = document.querySelector('.smsTotalTwo')

//reference to call total
let callTotalTwo = document.querySelector('.callTotalTwo')

//reference to final total
const totalTwo = document.querySelector('.totalTwo')

//variable to track call total
let radioCallTotal = 0;

//variable to track sms total
let radioSmsTotal = 0;

//variable to track final total;
let radioBillTotal = 0;


//reference the checked button
const checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");


const radioBillFunction = RadioBill();

radioBillAddBtn.addEventListener('click', () => {
    if(checkedRadioBtn){
        radioBillFunction.setRadioInput(checkedRadioBtn.value)
    }

})




/*radioBillAddBtn.addEventListener('click', () => {
    
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
    }

    //add appropriate ammounts to appropriate totals
    if(billItemType === 'call'){
        radioCallTotal += 2.75
    }else if(billItemType = 'sms'){
        radioSmsTotal += 0.75
    }else {
        radioCallTotal += 0;
        radioSmsTotal+= 0;
    }

    //calculate totalBill
    radioBillTotal = radioCallTotal + radioSmsTotal;

    //display totals on webpage
    callTotalTwo.innerHTML = radioCallTotal.toFixed(2);
    smsTotalTwo.innerHTML = radioSmsTotal.toFixed(2);
    radioBillTotal = radioSmsTotal + radioCallTotal;
    totalTwo.innerHTML = radioBillTotal.toFixed(2);

    //change colors according to total value
    if((radioBillTotal) > 30){
        totalTwo.classList.add('warning')
    }
    if((radioBillTotal) > 50){
        totalTwo.classList.add('danger')
    }
})*/
