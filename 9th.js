// filter() method
let nums = [1,2,3,4,5,6,7];
let evenNums = nums.filter(isEven);
let oddNums = nums.filter(isOdd);
console.log(evenNums);
console.log(oddNums);

function isEven(value)
{
    return value%2 === 0;
}
function isOdd(value)
{
    return value%2 === 1;
}


const words = ["apple","banana","orange","juice"];
const short_wordss = words.filter(shortWords);
console.log(short_wordss);

function shortWords(value)
{
    return value.length >= 6;
}



const products = [
     {id:1,name: "Laptop", description: "High-performance laptop with SSD", color: "Silver" },
     {id:2, name: "Smartphone", description: "Latest model with AMOLED display", color: "black" },
     {id:3, name: "Headphones", description: "Noise-canceling over-ear headphones", color: "black" },
     {id:4, name: "Smartwatch", description: "Water-resistant smartwatch with heart rate monitor", color: "Red" },
     {id:5, name: "Tablet", description: "Lightweight tablet with stylus support", color: "Gray" },

];
const result = products.filter(product => product.color == "black")
console.log(result);


