//Exercise 1

function min(a,b){if (a<b){return a}else{ return b }}

//Exercise2:
// function isEven(x){
//   var y=(x%2);
//   if(y===0){
//   	return true;}
//   else if(y===1){
//     return false;}
//    else{
//    var x=-2;
//      isEven(x);
//      return "??";
//    }
// }  OR
function isEven(number) {
    if (number == 0) {
        return true;
    } else {
        return (-number % 2 == 0) ? true : false;
    }
    return isEven(number - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//3. Bean Counting:
