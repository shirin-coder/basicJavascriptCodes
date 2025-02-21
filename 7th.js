// simple functions
// exmaple 1
function countVowels(str){
    let cnt = 0;
    for(const char of str)
    {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            cnt++;
        }
    }
    console.log(cnt);
    
}

countVowels("xyze")
// example 2
let nums = [1,2,3,4,5,6,7,8,9,10];
const oddEven = (array) => {
    let evenNums = [];
    let oddNums = [];
    for(let i=0;i<array.length;i++)
    {
        let val = array[i];
        if(val%2 === 0)
        {
            evenNums.push(val);
        }
        else 
        {
            oddNums.push(val);
        }
    }
    return oddNums;
}
const result = oddEven(nums);
console.log(result);

// example 3
const checkBigName = (array) =>{
    let bigName = array[0];
    for(let i = 1;i<array.length;i++)
    {
        const value = array[i];
        if(value.length > bigName.length)
        {
            bigName = value;
        }
    }
    return bigName;
}

const friendNames = ["shirin","snnsjfjjs","tom","tomhollandad","abcdefghijklmn"]
const getName = checkBigName(friendNames);
console.log(getName);

