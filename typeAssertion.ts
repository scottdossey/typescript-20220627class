let someValue: unknown = "hello";
let otherValue: string;

//You can't do the following line of code without an error.
//Even though it logically makes sense-- you can't
//assign an "unknown" type to a "string" type.

//otherValue = someValue;

//In the case of the code above, we KNOW more about the
//type someValue than typescript does. We know it is a string...
//So in order to achieve the statement above, we have to 
//add a "type assertion".  A "type assertion" is a lot like
//a cast in Java.

//Method1.
otherValue = <string>someValue;
console.log(otherValue);

//Method2.
otherValue = someValue as string;
console.log(otherValue);

//One thing you really need to watch out for with type assertions
//in typescript is if you want to dereference with "." off of the 
//resultant value, there is a bit of a gotcha...

//IE: console.log(<string>someValue.length);
//The above line of code does not work, because the "." operator
//has higher precedence than the "type assertion" operation...

//It is interpreted as:
//console.log(<string>(someValue.length));

//The proper way to do this is to use parenthesis:
console.log((<string>someValue).length); //THIS WORKS

//method 2
console.log((someValue as string).length);