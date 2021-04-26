describe('Text Bill Function', () => {
    describe('set values', () => {
        it('should be able to set the input value to call', () => {
            let textBillStr = TextBill()
            textBillStr.setInputStr('call')
    
            assert.equal('call', textBillStr.getInputStr());
        });
    
        it('should be able to set the input value to sms', () => {
            let textBillStr2 = TextBill()
            textBillStr2.setInputStr('sms')
    
            assert.equal('sms', textBillStr2.getInputStr());
        });
    });

    describe('use values', () => {
        it('should be able to make a call', () => {
            let textBillStr = TextBill()
            textBillStr.setInputStr('call')
            textBillStr.getInputStr()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()

            assert.equal(8.25, textBillStr.getTotalCallCost())

            let textBillStr2 = TextBill()
            textBillStr2.setInputStr('call')
            textBillStr2.getInputStr()
            textBillStr2.makeCall()
            textBillStr2.makeCall()

            assert.equal(5.50, textBillStr2.getTotalCallCost())
        });

        it('should be able to send an sms', () => {
            let textBillStr = TextBill()
            textBillStr.setInputStr('sms')
            textBillStr.getInputStr()
            textBillStr.sendSms()
            textBillStr.sendSms()
            textBillStr.sendSms()

            assert.equal(2.25, textBillStr.getTotalSmsCost())

            let textBillStr2 = TextBill()
            textBillStr2.setInputStr('sms')
            textBillStr2.getInputStr()
            textBillStr2.sendSms()
            textBillStr2.sendSms()

            assert.equal(1.50, textBillStr2.getTotalSmsCost())
        });
        
        it('should be able to send an sms and make a call', () => {
            let textBillStr = TextBill()
            textBillStr.setInputStr('call')
            textBillStr.getInputStr()
            textBillStr.makeCall()

            textBillStr.setInputStr('sms')
            textBillStr.getInputStr()
            textBillStr.sendSms()
            textBillStr.sendSms()

            assert.equal(4.25, textBillStr.getTotalCost())

            let textBillStr2 = TextBill()
            textBillStr2.setInputStr('call')
            textBillStr2.getInputStr()
            textBillStr2.makeCall()
            textBillStr2.makeCall()
            textBillStr2.makeCall()


            textBillStr2.setInputStr('sms')
            textBillStr2.getInputStr()
            textBillStr2.sendSms()
            textBillStr2.sendSms()

            assert.equal(9.75, textBillStr2.getTotalCost())
        });  
    });

    describe('warning and critical values', () => {
        it('should add a warning class when the total exceeds R30', () => {
            let textBillStr = TextBill()
            textBillStr.setInputStr('call')
            textBillStr.getInputStr()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()


            textBillStr.setInputStr('call')
            textBillStr.getInputStr()
            textBillStr.sendSms()

            textBillStr.getTotalCost();
            assert.equal('warning', textBillStr.addWarningClasses())
        });

        it('should add a "danger" class when the total exceeds 50', () => {
            let textBillStr = TextBill()
            textBillStr.setInputStr('call')
            textBillStr.getInputStr()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()
            textBillStr.makeCall()





            textBillStr.setInputStr('call')
            textBillStr.getInputStr()
            textBillStr.sendSms()

            textBillStr.getTotalCost();
            assert.equal('danger', textBillStr.addWarningClasses())
        });
        
        
    });
    
    
});
