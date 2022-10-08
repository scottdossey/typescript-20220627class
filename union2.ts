
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

function getSmallPet(): Fish | Bird {
    return {
        fly: function() { console.log("flap"); },
        layEggs: function() { console.log("plop"); }
    }
}

let pet = getSmallPet();

pet.layEggs(); //We can access this. This will not generate an error.
//THese are illegal because they aren't shared across all members of the union.
//pet.fly(); //Need type assertion because Fish | Bird union
                     //may not implement fly method.
//pet.swim();