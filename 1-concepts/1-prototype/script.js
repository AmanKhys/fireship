const child = {
    name: "kuttu",
};

const student = {
    schoolId: "221",
};

Object.setPrototypeOf(child,student);
console.log(Object.getPrototypeOf(child) === student);
console.log(Object.getPrototypeOf(student)=== Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) );