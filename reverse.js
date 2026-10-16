const str = "Hello";

console.log("Reversed string", str.split("").reverse().join(""));

function reverseStr(str) {
    let reversed = ""

    for (let i=str.length-1;i>=0;i--){
        reversed += str[i]
    }
    return reversed
}

console.log("Reversed", reverseStr(str))