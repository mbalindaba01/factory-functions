const TextBill = () => {
    let textStr
    let totalCallCost = 0
    let totalSmsCost = 0

    const setInputStr = (string) => {
        textStr = string
    }

    const getInputStr = () => {
        return textStr
    }

    const makeCall = () => {
        totalCallCost += 2.75
    }

    const sendSms = () => {
        totalSmsCost += 0.75
    }

    const getTotalCallCost = () => {
        return totalCallCost
    }

    const getTotalSmsCost = () => {
        return totalSmsCost
    }

    const getTotalCost = () => {
        return totalCallCost + totalSmsCost
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
        setInputStr,
        getInputStr,
        makeCall,
        getTotalCallCost,
        sendSms,
        getTotalSmsCost,
        getTotalCost,
        addWarningClasses
    }
}