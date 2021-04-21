

const BillWithSettings = () => {

    //initiating values to be set to zero 
    let theCallCost = 0;
    let theSmsCost = 0;
    let theWarningLevel = 0;
    let theCriticalLevel = 0;
    let callCostTotal = 0;
    let smsCostTotal = 0;

    //setting the costs
    const setCallCost = (callCost) => {
        theCallCost = callCost;
    }

    const getCallCost = () => {
        return theCallCost;
    }

    const setSmsCost = (smsCost) => {
        theSmsCost = smsCost;
    }

    const getSmsCost = () => {
        return theSmsCost;
    }

    const setWarningLevel = (warningLevel) => {
        theWarningLevel = warningLevel
    }

    const getWarningLevel = () => {
        return theWarningLevel;
    }

    const setCriticalLevel = (criticalLevel) => {
        theCriticalLevel = criticalLevel;
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
        return getTotalCallCost() >= getCriticalLevel()
    }

    const totalClassName = () => {

        if(hasReachedCriticalLevel()){
            return 'critical';
        }
        if(getTotalCallCost() >= getWarningLevel()){
            return 'warning';
        }
    }

    return {
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
        totalClassName
    }
}