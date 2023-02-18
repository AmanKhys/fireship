console.log(process.platform);
process.env.USER;//=


const {EventEmitter} = require('events'); 
const eventEmitter = new EventEmitter();
console.log(eventEmitter);
eventEmitter.on('lunch', () => {
    console.log('yummmyyy');
})
eventEmitter.emit('lunch');

const{readFile,readFileSync} = require('fs');
//think sync === blocking

const txt = readFileSync("../object/index.js", 'utf-8');
console.log(txt);

// readFile('./hello.txt','utf-8', (err,txt) => {
//     console.log(err,txt);
// });
console.log('do this ASAP');


