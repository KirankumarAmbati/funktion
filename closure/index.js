function outer() {
    let outerVar = 5

    return function inner() {
        return outerVar
    }
}

let returnFunc = outer()

console.log('1. CLOSURE is applied if the output is 5: ', returnFunc())

// Use case 1. Data Privacy

function createStore() {
    let state = 5

    function getState() {
        return state
    }

    return {
        getState
    }
}

let store = createStore()
// console.log(store.state)
console.log('2. Data privacy: ', store.getState())

// Use case 2.Partial functions and Currying.

function sum(num1, num2) {
    return num1 + num2
}

console.log('3. Normal function: ', sum(5, 3))

// Partial functions

let addBy5 = sum.bind(null, 5)

console.log('4. Partial function: ', addBy5(3))

// Currying

function sum2(num1) {
    return function(num2) {
        return num1 + num2
    }
}

addBy5 = sum2(5)
console.log('5. Currying: ', addBy5(3))

