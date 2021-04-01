// code goes here

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b; 
}

function increment(n) {
    return n += 1;
}


function decrement(n) {
    return n -= 1;
}
decrement(8); //expect 7

function makeInt(n) {
    console.log(parseInt(n, 10));
    return parseInt(n, 10);
}
makeInt("0x2328"); //expect 0

function preserveDecimal(n) {
    console.log(parseFloat(n));
    return parseFloat(n);
}
preserveDecimal("2.222"); // expect 2.222