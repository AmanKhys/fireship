const animal = {
    ab:'voila',
    bc:'vaa',
    cd:'voo',
};

const animal2 = {
    de:'boo',
    bc:'baa',
    ...animal,
};

console.log(animal2);