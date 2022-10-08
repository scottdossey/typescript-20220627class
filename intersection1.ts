interface Student {
    name: string;
    age: number;
}

interface Employee {
    employeeId: string;
}

//& is an intersection operator.
//it says that student worker has to implement
//both of the interfaces.
let StudentWorker: Student & Employee = {
    name: "Billy Bo Smith",
    age: 27,
    employeeId: "ID3241"
};

//TSC doesn't complain about it, but using
//with primitive types like string & number is pretty much
//nonsense.
//let x: string & number; //Not something you would do.
