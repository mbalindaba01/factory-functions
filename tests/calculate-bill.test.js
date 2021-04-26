describe('Calculate Bill Function', () => {
    describe('set values', () => {
        it('should be able to set input from client', () => {
            let calculateBill = BillWithString();

            calculateBill.setInputString('call, call');
            assert.equal('call, call', calculateBill.getInputString());

            let calculateBill2 = BillWithString();

            calculateBill2.setInputString('call, call, call');
            assert.equal('call, call, call', calculateBill2.getInputString());
        });


        it('should have a fixed warning level of 20', () => {

            let calculateBill = BillWithString();
            assert.equal(20, calculateBill.warningLevel)
            
        });

        it('should have a fixed critical level of 30', () => {

            let calculateBill = BillWithString();
            assert.equal(30, calculateBill.criticalLevel)
        
        });
        
    });

    describe('use values', () => {

        it('should be able to split user input into single strings', () => {
            let calculateBill = BillWithString();

            calculateBill.setInputString('call, call, sms, sms');

            assert.deepEqual(['call', ' call', ' sms', ' sms'], calculateBill.splitString())
        });
        
        it('should be able to calculate the total cost from the input string', () => {
            let calculateBill = BillWithString()

            calculateBill.setInputString('call, call, sms, sms')
            calculateBill.splitString();

            assert.equal(7, calculateBill.getTotalCost())

            let calculateBill2 = BillWithString()

            calculateBill2.setInputString('call, call')
            calculateBill2.splitString();

            assert.equal(5.5, calculateBill2.getTotalCost())

        });
        
    });

    describe('warning and critical values', () => {
        it('should return a class of warning when total cost reaches R20', () => {
            let calculateBill = BillWithString()

            calculateBill.setInputString('sms, sms, call, call, sms, sms, call, call, sms, sms, call, call, sms, sms,  ')
            calculateBill.splitString();
            calculateBill.getTotalCost()

            assert.equal('warning', calculateBill.addWarningClasses())

            let calculateBill2 = BillWithString()

            calculateBill2.setInputString('call, call, sms, sms, call, call, sms, sms, call, call, sms, sms,  ')
            calculateBill2.splitString();
            calculateBill2.getTotalCost()

            assert.equal('warning', calculateBill2.addWarningClasses())
        });

        it('should return a class of "danger" when total cost reaches R30', () => {
            let calculateBill = BillWithString()

            calculateBill.setInputString('sms, sms, call, call, sms, sms, call, call, sms,sms, sms, call, call, sms, sms, call, call, sms, sms, call, call, sms, sms,  ')
            calculateBill.splitString();
            calculateBill.getTotalCost()

            assert.equal('danger', calculateBill.addWarningClasses())

            let calculateBill2 = BillWithString()

            calculateBill2.setInputString('call, call, sms, sms, call, call,call, call, sms, sms, call, call,call, call, sms, sms, call, call,call, call, sms, sms, call, call, sms, sms, call, call, sms, sms,  ')
            calculateBill2.splitString();
            calculateBill2.getTotalCost()

            assert.equal('danger', calculateBill2.addWarningClasses())
        });
        
        
        
    });
    
    
    
});
