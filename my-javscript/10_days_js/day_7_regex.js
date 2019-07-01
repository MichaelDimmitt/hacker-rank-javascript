'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {
    //  ^ => first item matches:
    // () => stores matching value captured within
    // [aeiou] => matches any of the characters in the brackets
    // . => matches any character:
    // first match and last match gaurenteed. + adds a 3rd value (ensures str length > 3)
    // \1 => ensures that ending value matches is the same as the first match. 
    // $ ensures that the last matched item is at end of the sequence

    const re = /^([aeiou]).+\1$/
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}
