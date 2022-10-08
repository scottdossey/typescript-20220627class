// In general, any time you want to restrain
// the type of a variable you can do so 
// in typescript by adding ": TypeName"
// right after the variable declaration.

let a: boolean = false;
let b: number = 1.2;
// Numbers can also be hex: 0xf00d
//                  binary: 0b1010101
//                  octal: 0o744


let c: string = "Hello";
let d: bigint = 1000000000000012134123n;

//First notation for denoting typed arrays is:
let e: number[] = [1, 2, 3]; //e has to be an array of numbers.
                             //Every value in e has to be a number.

//Second notation:
let f: Array<number> = [1, 2, 3]; //An alternate way to specify
                                  //an array of numbers.
                                  
                                  
//Tuples.  A Tuple type allows you to express an array with 
//a fixed number of elements, whose types are known, but need
//not be the same.

//For example you may want to have a variable store a length 2 
//array called "a", where a[0] is string, and a[1]
//is a number.
let g : [string, number] = ["Hello", 1];
    //This specifically says that g is an array that is 2 elements
    //long whose first element is a string, and whose second
    //element is a number.

let h: unknown = 5;
h="hello";
//"unknown" specifically says that the value h can be any type,
//but even with unknown variables if you try to set or read an undefined
//property, that will stil be error checked and you will get an error.
h={foo:"hello"};
//h.x=3;    //This is an error with "unknown"

let i: any; //This can be any type--and is completely not type 
            //checked.
i={foo:"hello"};
i.x=3; //This is not an error with "any"

//let j: void; // This should be used for the return type of 
             //function that return nothing. 
function j(): void { console.log("return nothing"); }

let k: undefined = undefined;  //This may not make much sense 
                               //right now, but we will see how it 
                               //can be useful in future examples.
let l: null = null;

//undefined and null are the same type and the following two lines
//will not generate an error unless you tell tsc to use
//--strictNullChecks, in which case, they are different.
//k=null;
//l=undefined;

//We can use readonly for variable in interfaces only.
//let readonly x: number =5; //This is illegal not in na interface,
                           //use "const" keyword instead.
interface SomeInterface {
    readonly m: number; //means m can only be initialize when the object
                        //is initialized
}

//Now we can also declare an array as being readonly (this is not
//limited to being inside interfaces)
let n : ReadonlyArray<number> = [1, 2, 3];
//n[0] = 5; //Illegal, writes to array
//n.push(7); //also illegal

let o: Date; //Enforces that this holds a date.

let p: number | string | boolean; // Example of a union.

interface A {
    x: number;
}

interface B {
    y: string;
}

let q: A & B; //Example of an intersection. We can set q.x and q.y


let r: 1 | 2; //This means that r can only be 1.

r=1;
r=2;
//r=3; //illegal