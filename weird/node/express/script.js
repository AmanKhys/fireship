//npm init -y
// npm install express
const express = require('express');
const {readFile} = require('fs').promises;
const app = express();
app.get('/', async (request, response) =>{
    response.send( await readFile('.home.html','utf-8'));
    // readFile('./home.html', 'utf-8', (err, html)=>{
    //     if(err){
    //         response.status(500).send('sorry,out of order');
    //     }
    //     response.send(html);
    // });
});
app.listen(process.env.PORT || 3033, () => console.log('App available on local host aaya http://localhost:3033'));

