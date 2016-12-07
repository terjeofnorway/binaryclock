class ClockFace{
    constructor(){

    }

    updateClockFace(binaryClockMapArray){
        for(let pointer in binaryClockMapArray){
            for(let digitBinaryArray = 0 ; digitBinaryArray < binaryClockMapArray[pointer].length ; digitBinaryArray++){
                let singleDigitBinarySequence = binaryClockMapArray[pointer][digitBinaryArray];

                // Pad the binary string so that all strings contain 4 binary chars (0 | 1)
                singleDigitBinarySequence = ('00000' + singleDigitBinarySequence);
                singleDigitBinarySequence = singleDigitBinarySequence.substr(singleDigitBinarySequence.length - 4);

                for(let c = 0 ; c < singleDigitBinarySequence.length ; c++){
                    let targetSquareName = pointer + '-col' + (digitBinaryArray) + '-' + c;
                    //console.log(targetSquareName);
                    let target = document.getElementById(targetSquareName);
                    if(target){
                        if(singleDigitBinarySequence[c] == '0') {
                            target.classList.remove('on');
                        } else {
                            target.classList.add('on');
                        }
                        //console.log(target);
                    }


                }

            }
        }
    }
}