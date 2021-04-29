

const BillWithSettings = () => {

    //initiating values to be set to zero 
    let radioStr;
    let theCallCost = 0;
    let theSmsCost = 0;
    let theWarningLevel = 0;
    let theCriticalLevel = 0;
    let callCostTotal = 0;
    let smsCostTotal = 0;

    //get radio button value
    const setRadioInput = (string) => {
        radioStr = string;
    }

    const getRadioInput = () => {
        return radioStr;
    }

    //setting the costs
    const setCallCost = (callCost) => {
        theCallCost = parseFloat(callCost);
    }

    const getCallCost = () => {
        return theCallCost;
    }

    const setSmsCost = (smsCost) => {
        theSmsCost = parseFloat(smsCost);
    }

    const getSmsCost = () => {
        return theSmsCost;
    }

    const setWarningLevel = (warningLevel) => {
        theWarningLevel = parseFloat(warningLevel)
    }

    const getWarningLevel = () => {
        return theWarningLevel;
    }

    const setCriticalLevel = (criticalLevel) => {
        theCriticalLevel = parseFloat(criticalLevel);
    }

    const getCriticalLevel = () => {
        return theCriticalLevel;
    }

    const makeCall = () => {
        if(!hasReachedCriticalLevel()){
            callCostTotal += theCallCost;
        }
    }

    const getTotalCost = () => {
        return callCostTotal + smsCostTotal;
    }

    const getTotalCallCost = () => {
        return callCostTotal;
    }

    const getTotalSmsCost = () => {
        return smsCostTotal
    }
    
    const sendSms = () => {
        if(!hasReachedCriticalLevel()){
            smsCostTotal += theSmsCost;
        }
    }

    const hasReachedCriticalLevel = () => {
        return getTotalCost() >= getCriticalLevel()
    }

    const totalClassName = () => {

        if(hasReachedCriticalLevel()){
            return 'danger';
        }
        if(getTotalCost() >= getWarningLevel()){
            return 'warning';
        }
    }

    const removeWarning = () => {
        if(getWarningLevel() > getTotalCost() && getCriticalLevel() > getTotalCost() ){
            removeDanger()
            return 'warning'
        }
    }

    const removeDanger = () => {
        if(getCriticalLevel() > getTotalCost()){
            return 'danger'
        }
    }



    return {
        setRadioInput,
        getRadioInput,
        setCallCost,
        getCallCost, 
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        removeWarning, 
        removeDanger
    }
}