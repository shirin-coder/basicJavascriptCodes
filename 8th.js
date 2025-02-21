// forEach method
var nums = [10,20,30,50];
var sqrNums = [];
nums.forEach(function(x){
    sqrNums.push(x*2);
})

console.log(sqrNums);



let arr = ["london","newyork","tokyo"];
arr.forEach((val,idx,arr) => {
    console.log(val.toUpperCase(),idx,arr);
    
})
