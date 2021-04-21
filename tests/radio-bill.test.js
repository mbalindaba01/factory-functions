describe('Radio Bill Function', () => {
    describe('get values', () => {
        it('should be able to get input from radio button', () => {
            let radioBillFunc = RadioBill();
            radioBillFunc.setRadioInput('call');

            let radioBillFunc2 = RadioBill();
            radioBillFunc2.setRadioInput('sms');

            assert.equal('call', radioBillFunc.getRadioInput());
            assert.equal('sms', radioBillFunc2.getRadioInput());
        });
        
    });

    describe('use values', () => {
        it('should be able to make a call', () => {
            let radioBillFunc = RadioBill();

            radioBillFunc.setRadioInput('call');
            radioBillFunc.getRadioInput();
            radioBillFunc.makeCall();

            let radioBillFunc2 = RadioBill();

            radioBillFunc2.setRadioInput('call');
            radioBillFunc2.getRadioInput();
            radioBillFunc2.makeCall();
            radioBillFunc2.makeCall();


            assert.equal(2.75, radioBillFunc.getCallTotal());
            assert.equal(5.5, radioBillFunc2.getCallTotal());
            
        });

        it('should be able to send an sms', () => {
            let radioBillFunc = RadioBill();

            radioBillFunc.setRadioInput('sms');
            radioBillFunc.getRadioInput();
            radioBillFunc.sendSms();

            let radioBillFunc2 = RadioBill();

            radioBillFunc2.setRadioInput('sms');
            radioBillFunc2.getRadioInput();
            radioBillFunc2.sendSms();
            radioBillFunc2.sendSms();
            radioBillFunc2.sendSms();

            assert.equal(0.75, radioBillFunc.getSmsTotal());
            assert.equal(2.25, radioBillFunc2.getSmsTotal());
        });

        it('should be able to send an sms and make calls', () => {
            let radioBillFunc = RadioBill();

            radioBillFunc.setRadioInput('sms');
            radioBillFunc.getRadioInput();
            radioBillFunc.sendSms();
            radioBillFunc.sendSms();
            radioBillFunc.getSmsTotal();
            radioBillFunc.setRadioInput('call')
            radioBillFunc.getRadioInput()
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.getCallTotal();

            let radioBillFunc2 = RadioBill();

            radioBillFunc2.setRadioInput('sms');
            radioBillFunc2.getRadioInput();
            radioBillFunc2.sendSms();
            radioBillFunc2.sendSms();
            radioBillFunc2.getSmsTotal();
            radioBillFunc2.setRadioInput('call')
            radioBillFunc2.makeCall();
            radioBillFunc2.getCallTotal();

            assert.equal(4.25, radioBillFunc2.getTotalCost())
        });
        
        it('should return "warning" class when the total cost exceeds R30', () => {
            let radioBillFunc = RadioBill();

            radioBillFunc.setRadioInput('call')
            radioBillFunc.getRadioInput()
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.getCallTotal();

            assert.equal('warning', radioBillFunc.addWarningClasses())
        });

        it('should return "danger" class when the total cost exceeds R50', () => {
            let radioBillFunc = RadioBill();

            radioBillFunc.setRadioInput('call')
            radioBillFunc.getRadioInput()
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.makeCall();
            radioBillFunc.getCallTotal();

            assert.equal('danger', radioBillFunc.addWarningClasses())
        });
        
        
        
    });
    
    
});
