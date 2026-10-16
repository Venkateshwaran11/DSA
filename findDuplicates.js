const arr = [1, 2, 3, 2, 4, 1, 5];
function findDuplicates(num){
    const seen = new Set();
    let returnArr = new Set()
    for (let i=0; i<num.length; i++){
        if(!seen.has(num[i])){
            seen.add(num[i])
        }else{
            returnArr.add(num[i]);
        }
    }

    return [...returnArr]
}

console.log(findDuplicates(arr))