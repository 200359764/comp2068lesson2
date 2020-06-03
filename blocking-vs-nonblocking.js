console.clear();

const sayHi = name => console.log(`Hello, ${name}`);

sayHi('Seunghwan');
sayHi('Nathan');
sayHi('Mark');


setTimeout(sayHi, 2500, 'Joseph');
setTimeout(sayHi, 3500, 'Joe');
setTimeout(sayHi, 1500, 'Jerry');
sayHi('Ilia');


const farewell = name => console.log(`Goodbye, ${name}`);
const greeting = (name, callback) => {
    console.log(`Hello, ${name}`);

    callback(name);
}

greeting('Seunghwan Kim', farewell);