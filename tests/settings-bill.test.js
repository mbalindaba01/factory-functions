describe('Settings with Bill Factory Function', () => {
    describe('set values', () => {
        it('should be able to set the call cost', () => {
            let settingsBill = BillWithSettings();
            settingsBill.setCallCost(1.85);
            assert.equal(1.85, settingsBill.getCallCost())
    
            let settingsBill2 = BillWithSettings();
            settingsBill2.setCallCost(2.50);
            assert.equal(2.50, settingsBill2.getCallCost())
        });
    
        it('should be able to set the sms cost', () => {
            let settingsBill = BillWithSettings();
            settingsBill.setSmsCost(0.65);
            assert.equal(0.65, settingsBill.getSmsCost())
    
            let settingsBill2 = BillWithSettings();
            settingsBill2.setSmsCost(1.25);
            assert.equal(1.25, settingsBill2.getSmsCost());
        });
    
        it('should be able to set the sms and call cost', () => {
            let settingsBill = BillWithSettings();
    
            settingsBill.setSmsCost(0.65);
            settingsBill.setCallCost(1.75);
    
            assert.equal(0.65, settingsBill.getSmsCost());
            assert.equal(1.75, settingsBill.getCallCost());
    
            let settingsBill2 = BillWithSettings();
    
            settingsBill2.setSmsCost(0.95);
            settingsBill2.setCallCost(1.20);
    
            assert.equal(0.95, settingsBill2.getSmsCost());
            assert.equal(1.20, settingsBill2.getCallCost());
            
        });  

        it('should be able to set warning level and call cost', () => {
            let settingsBill = BillWithSettings();

            settingsBill.setCallCost(1.45);
            settingsBill.setWarningLevel(20);

            assert.equal(20, settingsBill.getWarningLevel());
            assert.equal(1.45, settingsBill.getCallCost());
            
        });

        it('should be able to set critical level and sms cost', () => {
            let settingsBill = BillWithSettings();

            settingsBill.setSmsCost(0.99);
            settingsBill.setCriticalLevel(40);

            assert.equal(40, settingsBill.getCriticalLevel());
            assert.equal(0.99, settingsBill.getSmsCost());
            
        });

        it('should be able to set warning and critical levels', () => {
            let settingsBill = BillWithSettings();

            settingsBill.setWarningLevel(30);
            settingsBill.setCriticalLevel(50);

            assert.equal(30, settingsBill.getWarningLevel());
            assert.equal(50, settingsBill.getCriticalLevel());
            
        });
    });

    describe('use values', () => {
        it('should be able to use the call cost set', () => {
            let settingsBill = BillWithSettings();
            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(2.75);
            settingsBill.setSmsCost(0.75);
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(8.25, settingsBill.getTotalCost());
            assert.equal(8.25, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
        });

        it('should be able to use the call cost set for 2 calls at 2.50 per call', () => {
            let settingsBill = BillWithSettings();
            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.75);

            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(5.00, settingsBill.getTotalCost());
            assert.equal(5.00, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
        });

        it('should be able to send 2 SMSs at 0.85 each', () => {
            let settingsBill = BillWithSettings();
            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);

            settingsBill.sendSms();
            settingsBill.sendSms();

            assert.equal(1.70, settingsBill.getTotalCost());
            assert.equal(0.00, settingsBill.getTotalCallCost());
            assert.equal(1.70, settingsBill.getTotalSmsCost());
        });

        it('should be able to send 2 SMSs at 0.85 each and a call at 1.35', () => {
            let settingsBill = BillWithSettings();
            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);

            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.makeCall();

            assert.equal(3.05, settingsBill.getTotalCost());
            assert.equal(1.35, settingsBill.getTotalCallCost());
            assert.equal(1.70, settingsBill.getTotalSmsCost());
        });
        
    });

    describe('warning and critical levels', () => {
        it('should return a class name "critical" when critical level is reached', () => {
            let settingsBill = BillWithSettings();
            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(5);

            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal('warning', settingsBill.totalClassName())
        });

        it('should return a class name "critical" when critical level is reached', () => {
            let settingsBill = BillWithSettings();
            settingsBill.setCriticalLevel(10)
            settingsBill.setCallCost(3.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(5);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();


            assert.equal('critical', settingsBill.totalClassName())
        });

        it('should stop the total call cost from increasing once critical level has been reached', () => {
            let settingsBill = BillWithSettings();
            settingsBill.setCriticalLevel(10)
            settingsBill.setCallCost(3.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(5);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();



            assert.equal('critical', settingsBill.totalClassName())
        });

        it('should allow total to increase after reaching critical level and updating it to a higher value', () => {
            let settingsBill = BillWithSettings();
            settingsBill.setCriticalLevel(10)
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(8);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal('critical', settingsBill.totalClassName());
            assert.equal(10, settingsBill.getTotalCallCost());

            settingsBill.setCriticalLevel(20);

            assert.equal('warning', settingsBill.totalClassName())
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.sendSms();

            assert.equal(15, settingsBill.getTotalCallCost())
        });


        
    });
    
    
});
