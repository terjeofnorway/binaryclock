/*global TimeKeeper, ClockFace b:true*/

class Application{

    constructor(){
        let timeHelper = new TimeKeeper();
        let clockFace = new ClockFace();
    }
}

if(window.__karma__ == undefined){
    window.application = new Application();
}
