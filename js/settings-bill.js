// get refences to all the settings fields
const callCostSetting = document.querySelector('.callCostSetting')
const smsCostSetting = document.querySelector('.smsCostSetting')
var warningLevelSetting = document.querySelector('.warningLevelSetting')
var criticalLevelSetting = document.querySelector('.criticalLevelSetting')

//get reference to all the totals fields
const callTotalSettings = document.querySelector('.callTotalSettings')
const smsTotalSettings = document.querySelector('.smsTotalSettings')
const totalSettings = document.querySelector('.totalSettings')

//get a reference to the 'Update settings' button
var updateSettings = document.querySelector('.updateSettings');

//get a reference to the add button
const addBill = document.querySelector('.addBill')


const settingsBill = BillWithSettings();

//event listener and function that gets triggered when update button is clicked
updateSettings.addEventListener('click', () => {
    settingsBill.setCallCost(callCostSetting.value)
    settingsBill.setSmsCost(smsCostSetting.value)
    settingsBill.setWarningLevel(warningLevelSetting.value)
    settingsBill.setCriticalLevel(criticalLevelSetting.value)
    totalSettings.classList.remove(settingsBill.removeWarning())
    totalSettings.classList.remove(settingsBill.removeDanger())
})

//event listener and function triggered when add bill button is clicked
addBill.addEventListener('click', () => {
    //get radio button value
    let checkedRadioBtn = document.querySelector('input[name="billItemTypeWithSettings"]:checked')
    if(checkedRadioBtn){
        settingsBill.setRadioInput(checkedRadioBtn.value)
    }

    //get the cost of the call and sms
    settingsBill.getSmsCost()
    settingsBill.getCallCost()

    //make call if radio button value is a call
    if(settingsBill.getRadioInput() == 'call'){
        settingsBill.makeCall()
    }

    //send sms if the radio button value is an sms
    if(settingsBill.getRadioInput() == 'sms'){
        settingsBill.sendSms()
    }

    //get warning and critical levels
    settingsBill.getWarningLevel()
    settingsBill.getCriticalLevel()

    //display totals on webpage
    callTotalSettings.innerHTML = settingsBill.getTotalCallCost().toFixed(2)
    smsTotalSettings.innerHTML = settingsBill.getTotalSmsCost().toFixed(2)
    totalSettings.innerHTML = settingsBill.getTotalCost().toFixed(2)

    //add warning and critical level classes to total cost
    totalSettings.classList.remove(settingsBill.totalClassName())
    totalSettings.classList.add(settingsBill.totalClassName())
    console.log(totalSettings)
})

