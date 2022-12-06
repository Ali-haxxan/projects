
function fib(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fib(num-1) + fib(num - 2);
    }
}

const nTerms = 18

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fib(i));
    }
}