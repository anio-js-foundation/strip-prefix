# @anio-js-foundation/strip-prefix

Remove the prefix of a string.

Throws error if string doesn't start with prefix:

```js
import stripPrefix from "@anio-js-foundation/strip-prefix"

console.log(stripPrefix("Hello, World", "Hello, ")) // "World"
console.log(stripPrefix("Hello, World", "Test")) // Error
```
