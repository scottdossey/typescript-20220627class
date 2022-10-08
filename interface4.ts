//Interfaces can have mandatory parameters...
//Interface can have optional parameters (specified with ?)
//Interfaces also can have parameters that can only
//   be set when the object is first created.

interface Point {
    readonly x: number;
    readonly y: number;
}

let myPoint: Point = {x: 17.5, y: 3.7};

//This is not legal because x is readonly.
//myPoint.x=18;