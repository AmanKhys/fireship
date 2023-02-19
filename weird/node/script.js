console.log(process.platform);
process.env.USER;//=


const {EventEmitter} = require('events'); 
// const { readFile } = require('fs');
const eventEmitter = new EventEmitter();
console.log(eventEmitter);
eventEmitter.on('lunch', () => {
    console.log('\n\n yummmyyy');
})
eventEmitter.emit('lunch');



// const{readFile,readFileSync} = require('fs');
// const fs = require('fs');
//think sync === blocking

// const textAane = readFileSync("./hello.txt", "utf-8",);
// console.log(textAane);   
// const data = readFileSync('./hello.txt','utf-8');
// console.log(data);

// readFile('./hello.txt','utf-8', (err,txt) => {
//     console.log(err,txt);
// });
// Promise based, also non-blocking
const { readFile } = require('fs').promises;

async function helloo(){
const txt =  await readFile('./hello.txt', 'utf8');console.log(txt);

};
helloo()
console.log('do this ASAP');

//modules .. npm
//common js require() ... es modules import/export
const myModule = require('./my-module');
console.log(myModule.science);
