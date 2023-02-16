const even = Array(100).fill(0).map((_,i) => i*2);
console.log(even);

const even2 = [...Array(100).keys()];
console.log(even2);

const arr = [1,1,1,1,3,3,5];
const arr2 = [...new Set(arr)];
console.log("arr" + arr);
console.log("arr2" + arr2);

const random = even[Math.floor(Math.random()*even.length)];
console.log(random);

arr.forEach( e => e*22);
    