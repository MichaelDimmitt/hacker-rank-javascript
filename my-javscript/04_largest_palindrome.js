process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        while(n-- > 0){
            if(isPalindrome(n) && isProduct(n)){
                console.log(n);
                break;
            }
        }
    }

}
const isPalindrome = (n) => (n + "").split("").reverse().join("") === (n + "")

// const isPalindrome = (n) => {
//   let forward = (Number(n).toString());
//   let frog = forward.split("").reverse().join("") === forward
//   return frog;
// }

// check if the other factor is a 3-digit number
const checkOtherFactor = (n, i) =>  (n%i == 0 && n/i > 99 && n/i < 1000) ? true : false 

const isProduct = (n) =>{
    // set boundary value for a 3-digit number
    let i = 0;
    for(i = 100; i < 1000; i++){
        // check if the other factor is a 3-digit number
        if(checkOtherFactor(n, i)){
            return true;
        }
    }
    return false;
}
