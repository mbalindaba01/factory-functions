const BillWithString = () => {

    let inputString;
    let warningLevel = 20;
    let criticalLevel = 30;
    let splitStr;
    const setInputString = (string) => {
        inputString = string;
    }

    const getInputString = () => {
        return inputString;
    }

    const splitString = () => {
        splitStr = inputString.split(',');
        return splitStr
    }

    const getTotalCost = () => {
        let total = 0;
        for(let i = 0; i < splitStr.length; i++){
            let bill = splitStr[i].trim();
           if(bill == 'call'){
               total += 2.75
           }else if(bill == 'sms'){
               total += 0.75
           }
        }
        return total;
    }

    const addWarningClasses = () => {
        if(getTotalCost() > 30){
            return 'danger'
        }

        if(getTotalCost() > 20){
            return 'warning'
        }
    }

    const removeWarningClasses = () => {
        if(getTotalCost() < 30){
            return 'danger'
        }

        if(getTotalCost() < 20){
            return 'warning'
        }
    }
    return {
        setInputString,
        getInputString,
        warningLevel,
        criticalLevel,
        getTotalCost,
        splitString,
        addWarningClasses,
        removeWarningClasses
    }
}
