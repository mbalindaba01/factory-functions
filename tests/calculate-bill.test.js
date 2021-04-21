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
        it('should be able to make calls at 2.75 each', () => {
            let calculateBill = BillWithString();

            calculateBill.makeCall();
            calculateBill.makeCall();
            calculateBill.makeCall();

            assert.equal(8.25, calculateBill.getCallCostTotal());
            assert.equal(0.00, calculateBill.getSmsCostTotal());
            assert.equal(8.25, calculateBill.getTotalCost());
        });

        it('should be able to send SMSs at 0.75 each', () => {
            let calculateBill = BillWithString();

            calculateBill.sendSms();
            calculateBill.sendSms();
            calculateBill.sendSms();

            assert.equal(0.00, calculateBill.getCallCostTotal());
            assert.equal(2.25, calculateBill.getSmsCostTotal());
            assert.equal(2.25, calculateBill.getTotalCost());
        });

        it('should be able to make calls at 2.75 each and send SMSs at 0.75 each', () => {
            let calculateBill = BillWithString();

            calculateBill.makeCall();
            calculateBill.sendSms();
            calculateBill.sendSms();

            assert.equal(2.75, calculateBill.getCallCostTotal());
            assert.equal(1.50, calculateBill.getSmsCostTotal());
            assert.equal(4.25, calculateBill.getTotalCost());
        });

        it('should be able to split user input into single strings', () => {
            let calculateBill = BillWithString();

            calculateBill.setInputString('call, call, sms, sms');

            assert.deepEqual(['call', 'call', 'sms', 'sms'], calculateBill.splitString())
        });
        
    });
    
    
});
