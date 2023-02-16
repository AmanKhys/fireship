function encapsulatedState(x){
    let state = 10;
    return function(){
        state += x;
        return state;
    }
}
a = encapsulatedState(11);

console.log(a(1));
const state = a(1);
console.log(state);