// function sum(arr){
//     let sum = arr.reduce((acc,value) => acc + value);
//     return sum;
// };

function sum(arr){
    let total = 0;
    arr.forEach(element => {
        total+=element;
    });
    return total;
}

arr = [1,2,2,2,2,55];
let realSum = sum(arr);
console.log(realSum);