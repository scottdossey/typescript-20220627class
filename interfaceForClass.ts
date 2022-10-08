interface ClockInterface {
    currentTime: Date;  
    setTime(d: Date): void;  
}

//If we inherit from the interface when creating a ES6 class
//that object created by the class have to conform to the 
//definition specified in the interface

class Clock implements ClockInterface {
    
    currentTime: Date = new Date();

    constructor(h: number, m:number) {        
    };

    setTime(x: Date) {
        this.currentTime = x;
    }
}