const foo = null ?? 'bar';
console.log(foo);

const boo = 0 ?? 'bar';
console.log(boo); // gives bar if || is used since 0 is falsy
