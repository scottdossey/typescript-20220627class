//Normal javascript does not support any concept of
//an enum (enumerated value), but typescript does.

enum Color {
    RED=1,
    GREEN=2, 
    BLUE=4
}

let c: Color = Color.GREEN;


console.log(c);

