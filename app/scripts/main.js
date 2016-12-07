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
        var binaryMap = this.timeHelper.getBinaryMap();


        this.timeHelper.tick();

        setTimeout(this.tick.bind(this),1000);

    }
}


if(window.__karma__ == undefined){
    window.application = new Application();
    window.application.init();
}
