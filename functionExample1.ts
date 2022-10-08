
//Function declaration
function add(a:number, b:number):number {
    return a+b;
}

//function expression
let add2 = function(a:number, b:number):number {
    return a+b;
}

function helloWorldX():void {
    console.log("Hello world");
}

//In javascript, functions can take in any number of 
//parameters. In typescript you have to pass the 
//exact number of arguments.
//add(1,2,3); //error--add doesn't take 3 parameters.

//If you want to build a function that can take optional 
//parameters in typescript, you can use "?" to make a 
//parameter optional. All optional parameters must 
//come after required parameters.

function buildName(firstName: string, lastName?: string) {
    if(lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}

console.log(buildName("Scott", "Dossey"));
console.log(buildName("Magicman"));

//We can also specifiy "default parameters"......
//we do this by assigning the parameter a value inside the function
function buildName2(firstName: string, lastName: string = "Smith") {
    return firstName + " " + lastName;        
}
console.log(buildName2("Scott", "Dossey"));
console.log(buildName2("Magicman"));


//If we want to have function take any number of 
//parameters we can use "spread notation" "..."
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie", "III");
console.log(employeeName);


