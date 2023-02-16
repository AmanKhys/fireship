function funWrapper(callback){
    callback('Called by wrapper');
    console.log(callback);
}

funWrapper(m => console.log(m));

function add(bad){
}
console.log(add("baaa"));

const k = "k";
function math(x,y,operator) {
    return operator(x,y);
}
function add(x,y) {return x+y;}
function sub(x,y) {return x-y;}

console.log(math(23,33,sub));