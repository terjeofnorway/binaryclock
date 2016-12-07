describe('Testing the TimeKeeper', () =>{

    let timeKeeper;

    beforeEach(() => {
        timeKeeper = new TimeKeeper();

    })

    it('rigs the timeHelper as expected', ()=>{
        expect(timeKeeper instanceof TimeKeeper).toBe(true);
    })

    it('splits a number into int array', () => {
        let testNumber1 = 99;
        let testNumber2 = 5;
        expect(timeKeeper.splitNumber(testNumber1)).toEqual([9,9]);
        expect(timeKeeper.splitNumber(testNumber2)).toEqual([0,5]);
    })

    it('returns the correct binary clock hours', () => {
        let date1 = new Date(2017,0,1,14,32,33);
        let binaryHours1 = timeKeeper.getBinaryHoursFromDate(date1);
        let binaryHoursControl1 = ['1','100'];

        expect(binaryHours1).toEqual(binaryHoursControl1);



        let date2 = new Date(2017,0,1,7,32,33);
        let binaryHours2 = timeKeeper.getBinaryHoursFromDate(date2);
        let binaryHoursControl2 = ['0','111'];

        expect(binaryHours2).toEqual(binaryHoursControl2);
    })

    it('returns the correct binary clock minutes', () => {
        let date1 = new Date(2017,0,1,14,32,33);
        let binaryMinutes1 = timeKeeper.getBinaryMinutesFromDate(date1);
        let binaryMinutesControl1 = ['11','10'];

        expect(binaryMinutes1).toEqual(binaryMinutesControl1);



        let date2 = new Date(2017,0,1,7,9,33);
        let binaryMinutes2 = timeKeeper.getBinaryMinutesFromDate(date2);
        let binaryMinutesControl2 = ['0','1001'];

        expect(binaryMinutes2).toEqual(binaryMinutesControl2);
    })

    it('returns the correct binary clock seconds', () => {
        let date1 = new Date(2017,0,1,14,32,59);
        let binarySeconds1 = timeKeeper.getBinarySecondsFromDate(date1);
        let binarySecondsControl1 = ['101','1001'];

        expect(binarySeconds1).toEqual(binarySecondsControl1);


        let date2 = new Date(2017,0,1,7,9,20);
        let binarySeconds2 = timeKeeper.getBinarySecondsFromDate(date2);
        let binarySecondsControl2 = ['10','0'];

        expect(binarySeconds2).toEqual(binarySecondsControl2);
    })

    it('returns the current date', () => {
        let date = new Date();
        expect(timeKeeper.currentDate).toEqual(date);
    })


})