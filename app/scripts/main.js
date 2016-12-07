/*global TimeKeeper, ClockFace b:true*/

class Application{

    constructor(){
        this.timeKeeper = new TimeKeeper();
        this.clockFace = new ClockFace();
    }

    init(){
        this.tick();
    }

    tick(){
        let binaryMap = this.timeKeeper.getBinaryMap();
        this.clockFace.updateClockFace(binaryMap);

        this.timeKeeper.tick();

        setTimeout(this.tick.bind(this),1000);
    }
}


if(window.__karma__ == undefined){
    window.application = new Application();
    window.application.init();
}
