---
title: Renaming your functions!
date: 2023-06-01
tags: [javascript, js, anonymous, lambda, defineproperty]
---

<small>[tl;dr: Object.defineProperty (jump)](#how)</small>

<span title='function declarations and function expressions'>"Normal" functions</span> have names, which are accessible by the `name` property:
```js
function func() { /*...*/}
const five = () => 5
let objfun = {a: () => 1, b: () => 3}

// func()
func.name  // 'func'
five.name  // 'five'
obj.a.name // 'a'
```

Named functions assigned to variables take on their expected name:
```js
const addTwo = function fooey(a) {return a + 2}
const addSix = function (a) {return a + 6}
const addOne = (() => (a) => a + 1)()

addTwo.name // 'fooey'
addSix.name // 'addSix'
addOne.name // ''
// addOne(6) -> 7
````

Somewhat self-explanatory:
```js
let fns = [() => 1, () => 3, () => 5]
let gen = () => {return () => 2}
fns[0].name // ''
gen().name  // ''
```

The `Function()` constructor is special:
```js
const cons = new Function("console.log(3);");

cons.name // 'anonymous'
cons()    // 3
```

Strictly speaking, a function's `name` property cannot be directly modified <small class="muted"><i>unless via function constructor</i></small>:
```js
function foo() {this.name = 'not foo'}
foo.name // 'foo'
```

<h2 id="how">Renaming</h2>

To **name or rename a function**, such as to a variable value:
```js
const subTwo = a => a-2
Object.defineProperty(subTwo, 'name', { value: 'geese' })
// modifies and returns the subTwo variable

subTwo.name // 'geese'
subTwo(1)   // -1
```

Another example:
```js
const nom  = 'ducks'
const func = Object.defineProperty((a) => a-2, 'name', { value: nom })

func.name // 'ducks'
func(1)   // -1
```

Object data:
```js
const DATA = {
  'first_one': (s, t) => s + 1 == t,
  'second er': (s, t) => s + 2 == t,
  'third_one': (s, t) => s + 3 == t,
  'thefourth': (s, t) => s + 4 == t,
}

const tests = Object.entries(DATA).map(([name, func]) => Object.defineProperty(func, 'name', { value: name }))
tests[0](2, 3) // true
tests[0].name  // first_one
tests[1].name  // second er


// Use case example
console.log('testing...')
for (let test of tests) {
  console.log(`${test.name}: ${test(3, 4) ? 'PASS' : 'FAIL'}`)
}
/**
  * testing...
  * first_one: PASS
  * second er: FAIL
  * third_one: FAIL
  * thefourth: FAIL
  */
```

---

[Functions in depth](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

> A function declaration also creates a variable with the same name as the function name.
>
>Thus, unlike those defined by function expressions, functions defined by function declarations can be accessed by their name in the scope they were defined in, as well as in their own body ["global" scope].
>
> Although the Function() constructor will create the function with name `anonymous`, this name is not added to the body.


<small>
[reference](https://stackoverflow.com/questions/5905492/dynamic-function-name-in-javascript/69465672#69465672)
[another source](https://stackoverflow.com/questions/3733580/javascript-variable-in-function-name-possible)
[docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
</small>
