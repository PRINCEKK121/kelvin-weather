// today's forecast in kelvin
const kelvin = 293;

// converting kelvin to celsius
const celsius = kelvin - 273;

// calculating the fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// rounding the fahrenheit variable down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);