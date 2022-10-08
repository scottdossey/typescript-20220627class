
class Animal {
    protected name: string; //protected means string can be 
                            //accessed by subclasses.

    public constructor(theName: string) {
        this.name = theName;
    }
    public move(distanceInMeters: number=0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    public constructor(name: string) {
        super(name);
    }

    public move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}


class Horse extends Animal {
    public constructor(name: string) {
        super(name);
    }

    public move(distanceInMeters = 45) {
        console.log(this.name);
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam: Animal = new Snake("Sammy the python");
let tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move();



