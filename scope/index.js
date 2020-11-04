var globalVar = 5;

function foo(params) {
    var localVar = 10; // localVar is local to 'foo'
    console.log(localVar); // 10
}

foo();

console.log(localVar); // Uncaught ReferenceError: localVar is not defined