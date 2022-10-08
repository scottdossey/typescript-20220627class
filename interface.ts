//So in typescript there is the concept of an 
//interface which defines an "object's" type
//This is an example of an interface.


interface User {
    name: string;
    id: number;
};

const newUser : User = {
    name: "Hayes",
    id: 0
};

console.log(newUser);


