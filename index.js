//..............................................QUESTION !.....................................................

//== operaters 
//It checks two operands  are equal or not . It  Compares two values for equality after converting both values to a common type.
//
//EXAMPLE:
// let x = 5;
// console.log  (x == 5);



// ===  operaters 
// It is a identify opertor. It checks two operands are identical or not. It Compares two values for equality without converting them. Both the value and the type must be the same.

//EXAMPLE 

// let x = 5;

// console.log (x === 9);




//.................................................................QUESTION 2.....................................................


// VAR :   The var is the oldest keyword to declare a variable in JavaScript. It has the Global scoped or function scoped.

// If you create a variable outside of a function, you can use it anywhere in your code. If you create a variable inside a function, you can only use it within that function.
//They do not have block scope, which means if you declare var inside a block it will still be accessible outside the block.

//....EXAMPLE 
// var a = 10
// function f() {
//     var b = 20
//     console.log(a, b)
// }
// f();




// LET   :  let has block scope, meaning variables declared inside a block ({}) are only accessible within that block.  Its is reassigned but it not re-declaration.

//  EXAMPLE

// {
//     let y = 20;
//     console.log(y);
//   }
//   console.log(y);



// CONST :  const has block scope, just like let. IT is not assigned and not decleration.
// EXAMPLES 

// const a = 10;
// function f() {
//     a = 9
//     console.log(a)
// }
// f();



//.......................................QUESTION 3.........................................


// //Execution context is the concept for describing the internal working of a code.  It is the execution context that decides which code section has access to the functions, variables, and objects used in the code. During the execution context, the specific code gets parsed line by line then the variables and functions are stored in the memory. it is the execution context that provides an environment for the specific code to get executed
// //Types of Execution Context
// The types of execution context in JavaScript are:

// Global Execution Context
// Functional Execution Context
// Eval Execution Context


//..................................................QUESTION 4...........................................


//Creation Phase: During this initial phase, the JavaScript engine sets up the necessary components for the execution context.

//Execution Phase: Once the creation phase is complete, the execution phase begins. Here, the JavaScript engine executes the cod//e line by line within the execution context. It assigns values to variables, calls functions, and performs other operations specified in the code.


//...................................................QUESTION 5...................................................................


//Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes during the creation phase. This means that you can use variables and call functions before they are actually declared in the code.

//Declarations are hoisted, not initializations.
// Allows calling functions before their declarations.
// All variable and function declarations are processed before any code execution.
// Undeclared variables are implicitly created as global variables when assigned a value.

//......................................................QUESTION 6...............................................

// A variable is declared, but no value has been assigned to it yet.When it happens: If you declare a variable but don't assign any value to it, its default value is undefined.
//Example:
// let x;
// console.log(x); 



//NaN:
// NaN is a special value in JavaScript that indicates that a calculation or operation that should result in a number did not produce a valid number. When it happens: It usually occurs when you try to perform a mathematical operation that doesn't make sense with the given inputs.

// Example:

// let result = "hello" / 2;
// console.log(result);



//...................................................QUESTION 7..................................................



// Arithmetic Operators: + (Addition)
// - (Subtraction)
// * (Multiplication)
// / (Division)
// % (Modulus - remainder)
// ** (Exponentiation)
// ++ (Increment)
// -- (Decrement)

 //  2. Assignment Operators :  = (Assign)
// += (Add and assign)
// -= (Subtract and assign)
// *= (Multiply and assign)
// /= (Divide and assign)
// %= (Modulus and assign)
// **= (Exponentiation and assign)



// 3.  Comparison Operators: == (Equal to)
// != (Not equal to)
// === (Strict equal)
// !== (Strict not equal)
// > (Greater than)
// < (Less than)
// >= (Greater than or equal)
// <= (Less than or equal)

//4.Logical Operators: 
// && (Logical AND)
// || (Logical OR)
// ! (Logical NOT)
// 5.Bitwise Operators:
// & (AND)
// | (OR)
// ^ (XOR)
// ~ (NOT)
// << (Left shift)
// >> (Right shift)



//.......................................................QUESTION 8.......................................................................


// 1. Local Scope:
//  A variable declared inside a function is in local scope. It means the variable is only accessible within that function and not outside it.
//  Whenever you declare a variable using var, let, or const inside a function, it is local to that function.
// Example:

// function myFunction() {
//   let localVariable = 'I am local';
//   console.log(localVariable); 
// }
// console.log(localVariable); 




// 2. Block Scope:
//  Variables declared with let or const inside a block ({}) are in block scope. They are only accessible within that specific block.
//  Any block (e.g., if, for, or just {}) defines a block scope if it contains variables declared with let or const. var does not respect block scope and will hoist the variable outside the block.
// Example:
//
// {
//     let x = 13;
// }
// console.log(x);




// 3. Function Scope:
//  Variables declared with var inside a function are function-scoped, meaning they are only accessible within that function. Unlike let and const, var does not have block scope, but it does have function scope.
//   var respects function scope but does not respect block scope (like if or for blocks).
// Example:

// function testScope() {
//     if (true) {
//       var functionScoped = "I'm function scoped";

//     }
  
//     console.log(functionScoped); 

//   }
  
//   testScope();
  


// 4. Scope Chain:
// What it means: The scope chain is how JavaScript looks for variables. If a variable is not found in the current scope, JavaScript will look at the outer scope (parent scope), all the way up to the global scope. This creates a chain of scopes, hence the name "scope chain."
// When it happens: The scope chain is used when a variable is called. JavaScript starts looking for the variable in the current scope, and if it doesn't find it, it goes up to the next outer scope, and so on.
// Example:

// var globalVariable = "I'm global";

// function outerFunction() {
//   var outerVariable = "I'm in outer scope";

//   function innerFunction() {
//     var innerVariable = "I'm in inner scope";
//     console.log(innerVariable); 
//     console.log(outerVariable); 
//     console.log(globalVariable); 
//   }

//   innerFunction();
// }

// outerFunction();