const person = undefined;
const dude = person?.name;
console.log(dude?.foo);
console.log(dude);
const cude = person?.name;
console.log(cude);

function fo(a,b) {return a+b;}
console.log(fo?.(3,3,4));

const arr = [2,2,2];
console.log(arr?.[4]);
