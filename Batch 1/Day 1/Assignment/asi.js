//CONSOLE.LOG()
//The console.log() is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.
var A = "shashank"
console.log(A);

//CONSOLE.WARN()
//The console.warn() method writes a warning to the console.
console.warn("warning message");

//difference between  var let and const
//var is “function scoped”
//“let” and “const” are“block scoped”.
//“const” cannot be re-assigned to a new value. However it CAN be mutated.

var a=10;
let b=20;
const PI=3.14;

{
    var a=10;
    console.log(a);
  } //block 1
  {
    a++;
    console.log(a);
  } //block 2
  /* Since we are using "var a=10", scope of "a" is limited to the function within which it is defined. In this case it is within the global function scope */


//   using let

{
    let a=10;
    console.log(a);
   } //block 1
   {
     a++;
     console.log(a);
   } //block 2
   /* Since we are using "let a=10", scope of "a" is limited to block 1 and "a" is not recognized in block 2 */

//    const

{
    const PI=3.14;
    console.log(PI);
   } //block 1
   {
     console.log(PI);
   } //block 2
   /* Since we are using "const PI=3.14", scope of "PI" is limited to block 1 and "PI" is not recognized in block 2 */

//JavaScript Data Types
//JavaScript variables can hold many data types: numbers, strings, objects and more:

var length = 20;                               // Number
var lastName = "shanky";                      // String
var x = {firstName:"shashank", lastName:"padave"};    // Object