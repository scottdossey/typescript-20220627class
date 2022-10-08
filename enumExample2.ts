//An Enumeration is a type that can have one of several specific 
//values

//IE: Let's say you had a trouble ticket database...
//and tickets could be in only a few different states:
//   1. SUBMITTED
//   2. REVIEWED
//   3. ASSIGNED
//   4. IN_PROGRESS
//   5. RESOLVED
//   6. WONT_FIX

enum TicketState {
    SUBMITTED=1,
    REVIEWED,
    ASSIGNED=7,
    IN_PROGRESS,
    RESOLVED,
    WONT_FIX
};

let currentState: TicketState = TicketState.SUBMITTED;
//Typescript doesn't strictly check enums
//It does add thefeature of enum to the language.
console.log(TicketState.SUBMITTED);
console.log(TicketState.REVIEWED);
console.log(TicketState.ASSIGNED);
console.log(TicketState.IN_PROGRESS);
console.log(TicketState.RESOLVED);
console.log(TicketState.WONT_FIX);
