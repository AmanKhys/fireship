
// function search(arr, target, start=0, end=arr.length-1) {

//     console.log(start, end)

//     if (start > end) {
//         console.log('Not found!');
//         return -1;
//     } 

//     const middle = Math.floor( (start + end) / 2 );

//     if (arr[middle] === target) {
//         console.log(`${target} Found at index ${middle}`);
//         return middle;
//     } 

//     if(arr[middle] > target) {
//         return search(arr, target, start, middle-1);
//     }

//     if(arr[middle] < target) {
//         return search(arr, target, middle+1, end);
//     }

// }

// const arr = ['a', 'b', 'c', 'x', 'y', 'z'];
// console.log(search(arr, 'b'));



function find(arr, target, start = 0, end = arr.length - 1){
    let middle = Math.floor((start+ end)/2);
    console.log(start,end,middle);
    if(arr[middle] === target){   
        console.log("target found at index" + middle); 
        return middle;
    };


    if(start>end){console.log("not found"); return -1;};

    if(target>arr[middle])
        return find(arr,target,middle+1,end);
    if(target<arr[middle])
        return find(arr,target,start,middle-1); 
   
};

let arr = [1,22,32,43,44,221,224,442,1235];
let found = find(arr,221);
