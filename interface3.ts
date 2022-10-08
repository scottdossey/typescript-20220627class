//An interface specifies what properties have to exist.
//Sometimes you want to have optional properties that may or
//may not be set. (But you still want to enforce their type if they
//are set). We can create optional properties by marking a property
//with a ? (in an interface).

interface SquareConfig {
    color?: string;
    width?: number;
};

let mySquare: SquareConfig;

mySquare = {};
mySquare = {color: "blue"};
mySquare = {width: 7};
mySquare = {color: "blue", width: 7};

//Cannot assign a literal value to mySquare that goes beyond
//the capabilities of the interface.
//mySquare = {color: "blue", width: 7, name: "hello"};

//It is okay however, if we use an intermediate variable.
interface SuperSquareConfig {
    color?: string;
    width?: number;
    name: string;
}


let foo: SuperSquareConfig = {color: "blue", width: 7, name: "hello"};
mySquare = foo;


