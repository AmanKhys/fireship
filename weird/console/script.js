console.log(console);
console;

//show variable names when console logging
const foo = 'kakaak';
const bar = 'baabaa';
console.log(bar,foo);
console.log({foo,bar});
console.log([foo,bar]);
console.table({foo,bar});
console.table([foo,bar]);

//group console logs
console.group()// or groupColappsed()
console.log(1);
console.log(2);
console.log(33);
console.groupEnd();

//conditionally use console log

/* Sometimes you want to log ONLY when a condition is falsey - 
this is known as an assertion.
 It will keep your code concise by eliminating the need for if statements.
*/
const loggedIn = false;
if(!loggedIn ){
    console.error('user is logged in assetion failed');
};
console.assert(loggedIn,'user is logged in');


//increment a counter in the console
const clicks = 20;
console.count('clicks');
console.count('clicks');
console.count('clicks');
console.count('clicks');
// counts 1 to four like clicks: 3

//set timer with the console
console.time(); //gives time
const timeConsume = 33;
console.timeLog(); //gives time after .time()
const timeComsume2 = 222;
console.timeLog(); //gives time after .time()
console.timeEnd();

//add custom css styles to the console output
console.log("%c heeeeelloo....world", "color:red;background-color:blue;");

