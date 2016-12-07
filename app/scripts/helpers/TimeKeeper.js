class TimeKeeper{


    constructor(){
        this.currentDate = new Date();
    }

    splitNumber(number){
        let numberString = number < 10 ? '0' + number.toString() : number.toString();
        let numberArray = numberString.split('').map((t) => { return parseInt(t)});

        return numberArray;
    }

    getBinaryHoursFromDate(date = this.currentDate){
        let hourStringArray = this.splitNumber(date.getHours());
        return [hourStringArray[0].toString(2),hourStringArray[1].toString(2)];
    }

    getBinaryMinutesFromDate(date = this.currentDate){
        let minutesStringArray = this.splitNumber(date.getMinutes());
        return [minutesStringArray[0].toString(2),minutesStringArray[1].toString(2)];
    }

    getBinarySecondsFromDate(date = this.currentDate){
        let secondsStringArray = this.splitNumber(date.getSeconds());
        return [secondsStringArray[0].toString(2),secondsStringArray[1].toString(2)];
    }



    tick(){
        this.currentDate = new Date();
    }

}