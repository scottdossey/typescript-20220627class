//This is a vanilla Javascript example of 
//code to print an object that has the "label" property.

function printLabel( labeledObject ) {
    console.log(labeledObject.label);
}

let myObject = {size: 10, label: "Size 10 Object"};
printLabel(myObject);

//The printLabel routine has an effective requirement
//that the labeledObject has a .label property, but our
//vanilla javascript code does not enforce that, it'd be nice
//if we could enforce that. To see how we can do that 
//we are going to reimplement printLabel as printLabel2 with 
//typescript.

function printLabel2( labeledObject : { label: string } ) {
    console.log(labeledObject.label);
}

let myObject2 = {size: 11, label: "Size 11 Object"};
printLabel2(myObject2);

///We can make this a bit cleaner and clearer if instead of
//using {label: string} right in the function declaration, 
//we declare an interface.

interface LabeledValue {
    label: string;
}

function printLabel3( labeledObject: LabeledValue ) {
    console.log(labeledObject.label);
}

printLabel3(myObject2);