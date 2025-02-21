// find
let ages = [10,20,25,12]
console.log(ages);

function checkAdult(age) {
    return age>18
}
var b = ages.find(checkAdult)
console.log(b);

