// Array Destructuring in JavaScript
let nums = [3,4,5,6];
console.log(nums);
let [w1,w2,w3,w4] = nums;
console.log(w3);

let words1 = "My name is Rabeya Fatema Shirin".split(' ');
let [p1,p2,p3,p4,p5,p6] = words1;
console.log(p3,p4);

let words = "My name is Shirin".split(' ');
let [a,b,,...d] = words;
console.log(d);
