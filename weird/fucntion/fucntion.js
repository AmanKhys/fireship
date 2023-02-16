// Positional
function makeBreakfast(main, side, drink) {
    console.log(arguments)
    return `Breakfast is ${main}, ${side}, and ${drink}.`;
}

// Named
function makeLunch(opts) {
    const { main, side, drink } = opts;
    return `Lunch is ${main}, ${side}, and ${drink}.`; 
}

// Rest params
function makeDinner(main, ...args) {
    console.log(main, args)
    return `Dinner includes ${main} and ${args.join(' **')}.`; //=
}


makeBreakfast('🥞', '🥓', '🥛');

makeLunch({ main: '🥙', side: '🍟', drink: '🥤' }); 

const string = makeDinner('🍜', '🥘', '🍙', '🥠', '🍑'); //=
const p = 2;
console.log(string) //= 
const well = {} 

let k = "butterfly"
console.log(k)

function repeat(){
    let count = 0
    function counter(){
        count++;
        console.log(count)
        return count;
    }
    return counter;
};

let adderOne = repeat();
adderOne();
adderOne(); 
adderOne(); 
adderOne();adderOne()
let num = adderOne();
console.log(num)
