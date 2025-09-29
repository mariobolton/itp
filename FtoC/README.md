# FtoC Assignment Documentation

## First Code

At first, I started pretty much taking the ["Defining A Function"](https://eloquentjavascript.net/03_functions.html#c-JW7vLBZMWv:~:text=avoid%20excessive%20verbosity.-,Defining%20a%20function,-A%20function%20definition) subtitle example from the book [Eloquent JavaScript](https://eloquentjavascript.net/index.html), and thought that I could use it for the assignment.

The code found in the example is the following: 
`
const square = function(x) {
  return x * x;
}
console.log(square(12));
`
So with my tweaking to make it a fahrenheit to celsius coverter ends up like this: 
`const ftoc = function(fahrenheit) {
  return (fahrenheit -32) * 5 / 9;
  }
console.log(ftoc(99));
`

Nevertheless, when I was about to deliver my work, I read the instructions again and saw that I had to create two variables; f and c, so I had to come up with another code for it.

## Second and Final Code

To add the two variables, I knew from the class and the book that I could do this with the `let` keyword. So I first changed fahrenheit to f. Then defined f and c, to then ask the program to give me the value of c. At first thinking about how to define c was a bit tough, but then I figured out that it was just  the same as the first code, but changing 99 to f.

The final code is the following:
`
const ftoc = function(f) {
  return (f -32) * 5 / 9;
  }
let f = 99
let c = ftoc(f)
console.log(c);
`
