/*global TimeKeeper, ClockFace b:true*/

class Application{

    constructor(){
        this.timeHelper = new TimeKeeper();
        this.clockFace = new ClockFace();
    }

    init(){
        this.tick();
    }

    tick(){

        let binaryClock = [
            this.timeHelper.getBinaryHoursFromDate(this.timeHelper.currentDate),
            this.timeHelper.getBinaryMinutesFromDate(this.timeHelper.currentDate),
            this.timeHelper.getBinarySecondsFromDate(this.timeHelper.currentDate)];

        this.timeHelper.tick();

        setTimeout(this.tick.bind(this),1000);

    }
}


if(window.__karma__ == undefined){
    window.application = new Application();
    window.application.init();
}
