const arr = [4, 5, 1, 2, 1, 4, 5];

function nonRepeated(){
    for (let num of arr){
        let nonRepeat = arr.filter(i=>i===num).length===1;
        if(nonRepeat){
            return num
        }
    }
}

function notRepeatedMap(){
    const frequency = new Map();
    for (let num of arr){
        frequency.set(num,(frequency.get(num)||0)+1)
    }
    console.log(frequency)
    for (let num of arr){
        if(frequency.get(num)===1){
            return num;
        }
    }
}
console.log(nonRepeated())
console.log(notRepeatedMap())