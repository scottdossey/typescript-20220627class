//We can define a special kind of interface that is not an interface
//for an object, but an interface for a function. Instead
//of having a list of variables inside the interface, and their types....
//we have a single entry, which defines a function "signature"

interface SearchFunction {
    (source: string, subString: string) : boolean;
}

let mySearch: SearchFunction;

mySearch = function(a: string, b: string) {
    let result = a.search(b);
    return result > -1;
};

//mySearch has to be assigned a function that matches the signature of
//SearchFunction. The names of the parameters do not matter.