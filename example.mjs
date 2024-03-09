import stripPrefix from "./src/index.mjs"

console.log(stripPrefix("Hello, World", "Hello, ")) // "World"
console.log(stripPrefix("Hello, World", "Test")) // Error
