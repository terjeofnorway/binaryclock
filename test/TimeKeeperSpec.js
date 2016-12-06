describe('Testing the TimeKeeper', () =>{

    let timeKeeper;

    beforeEach(() => {
        timeKeeper = new TimeKeeper();

    })

    it('rigs the timeHelper as expected', ()=>{
        expect(timeKeeper instanceof TimeKeeper).toBe(true);
    })

    it('gets the correct hours', () => {
        let hours = new Date().getHours();
        expect(timeKeeper.getHours()).toEqual(hours);
    })

    it('gets the correct minutes', () => {
        let minutes = new Date().getMinutes();
        expect(timeKeeper.getMinutes()).toEqual(minutes);
    })

    it('gets the correct seconds',() => {
        let seconds = new Date().getSeconds();
        expect(timeKeeper.getSeconds()).toEqual(seconds);
    })

})