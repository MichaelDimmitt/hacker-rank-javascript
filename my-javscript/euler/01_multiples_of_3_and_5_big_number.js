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
var BigNumber = require('bignumber.js');
function main() {
  const t = parseInt(readLine());    
  for(var a0 = 0; a0 < t; a0++){ 
    const bigAnswer = calc(BigNumber(readLine()))
    console.log(bigAnswer.toString());
  }
}
function summation(targetValue, scalar){
  const  baseValue = BigNumber( Math.floor( ( targetValue.minus(1) ).dividedBy(scalar) ).toString() )
  return baseValue.times(scalar).times(baseValue.plus(1)).dividedBy(2)
}
  
function calc(big_num){
  return summation(big_num, 3).plus(summation(big_num, 5)).minus(summation(big_num, 15))
}

/* non big number solution.
function main() {
    const t = parseInt(readLine());    
    for(var a0 = 0; a0 < t; a0++){
      console.log(calc(parseInt(readLine()) - 1))
    }
}
function summation(targetValue, scalar){
    // summation = scalar * scalar + 1
    const baseValue = Math.floor(targetValue / scalar)
    const summation = scalar * (baseValue * (baseValue+1)) / 2
    return summation
}
  
function calc(n){
    // target number divided by 3, 5, 15 removed for colisions.
    return summation(n, 3) + summation(n, 5) - summation(n, 15)
}
*/
