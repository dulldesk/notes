---
title: Are you a Number?
date: 2025-04-05
tags: [js, javascript, nan, "isnan()", typescript]
---

Number.isNaN() and isNaN() behave differently.

|  | **Number.isNaN()** | **isNaN()** |
| --- | --- | --- |
| `'asdf'` | false | true |
| `undefined` | false | true |
| `'10f'` | false | true |
| `{}` | false | true |
| `"NaN"` | false | true |

The MDN docs explain their differences as isNaN() coerces the parameter to a number.

Note that TypeScript only accepts `unknown` as the parameter type, even though JS handles additional cases (i.e. `undefined`).

Cases with the same behaviour:

|  | **Number.isNaN()** | **isNaN()** |
| --- | --- | --- |
| `123` | false | false |
| `'123'` | false | false |
| `''` | false | false |
| `' '` | false | false |
| `null` | false | false |
| `[]` | false | false |
| `Infinity` | false | false |
| `false` | false | false |
| `0/0` | true | true |
| `NaN` | true | true |

### Further Reading

[Number.isNaN() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#)

[isNaN() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

