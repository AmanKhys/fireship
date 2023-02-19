console.log(process.platform);
process.env.USER;//=


const {EventEmitter} = require('events'); 
const { readFile } = require('fs');
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

const {readFile} = require('fs').promises;
async function hello(){
    const file = await readFile('./hello.txt', 'utf-8');
    console.log(file);
}
hello();
console.log('do this ASAP');


