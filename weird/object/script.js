//literal
const dog = {};
//constructor 
const cat = new Object(); 
// static method
const horse = Object.create({});

const k = 'paper';
const obj= {
    [k]: 22,
};

delete obj.paper;
obj;

//references
const original = {};
const a = original;
const b = a;
a ==b;
a === {};
a;b;

a.hello = "vadai";
b;

//combining objects
const clone = Object.assign({},original);
clone;
clone === original;
original.hello = "!changed";
clone;

//combine using spread syntax
const sugar = {...original};
const paper = {...original, hola:'mundo'};//=

//object methods
const newObj = {
    hello() {console.log('yo')},
};
newObj.hello();//prints yo

//this 
//In a normal method, this refers to the object on which it is defined.

newObj.userName = 'jeff';
newObj.hello2 = function () { console.log(`my name is ${this.userName}`)}; 
//can't use arrow function here.. it doesn't consider the newObj for 
// Functions using the arrow syntax are not bound to this, so it refers to the outer or global this context.


//chaining

const game = {
    hitpoint:100,
    log(){
        console.log(`hero ${this.hitpoint}`);
    },
    takeDamage(){
        this.hitpoint -=10;
        this.log();
        return this; //required for chaining
    },
    heal(){
        this.hitpoint += 10;
        this.log();
        return this;
    },
};

game.takeDamage()
    .takeDamage()
    .takeDamage()
    .heal();//=


//constructors
//constructors are just functions that describe how to create on Object

function Boat(name){
    this.name = name;
    this.created = Date.now();
    this.horn = function(){
        console.log(this.name);
    };
};

const sally = new Boat('sallyyy');//=
sally.horn();// prints salllyyy 
const molly = new Boat('molly');
molly.horn();//prints molly
molly;
console.log(molly);





