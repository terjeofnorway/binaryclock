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

    it('returns the correct binary clock array', () => {
        let date1 = new Date(2017,0,1,14,32,33);
        let binaryHours1 = timeKeeper.getBinaryHourFromDate(date1);
        let binaryHoursControl1 = ['1','100'];

        expect(binaryHours1).toEqual(binaryHoursControl1);



        let date2 = new Date(2017,0,1,7,32,33);
        let binaryHours2 = timeKeeper.getBinaryHourFromDate(date2);
        let binaryHoursControl2 = ['0','111'];

        expect(binaryHours2).toEqual(binaryHoursControl2);

    })


})