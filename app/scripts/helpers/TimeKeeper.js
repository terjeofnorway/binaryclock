class TimeKeeper{


    constructor(){
        this.currentDate = new Date();
    }

    splitNumber(number){
        let numberString = number < 10 ? '0' + number.toString() : number.toString();
        let numberArray = numberString.split('').map((t) => { return parseInt(t)});

        return numberArray;
    }

    getBinaryHourFromDate(date = this.currentDate){
        let hourStringArray = this.splitNumber(date.getHours());



        return [hourStringArray[0].toString(2),hourStringArray[1].toString(2)];
    }

    tick(){
        this.currentDate = new Date();
    }

}