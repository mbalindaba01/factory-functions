const RadioBill = () => {
    let radioBillStr;
    let callTotal = 0;
    let smsTotal = 0;

    const setRadioInput = (string) => {
        radioBillStr = string;
    }

    const getRadioInput = () => {
        return radioBillStr;
    }

    const makeCall = () => {
        callTotal += 2.75;
    }

    const sendSms = () => {
        smsTotal += 0.75
    }

    const getCallTotal = () => {
        return callTotal;
    }

    const getSmsTotal = () => {
        return smsTotal;
    }

    const getTotalCost = () => {
        return callTotal + smsTotal;
    }

    const addWarningClasses = () => {
        if(getTotalCost() > 50){
            return 'danger'
        }

        if(getTotalCost() > 30){
            return 'warning'
        }
    }

    return {
        setRadioInput,
        getRadioInput,
        makeCall,
        sendSms,
        getCallTotal,
        getSmsTotal,
        getTotalCost,
        addWarningClasses
    }
}