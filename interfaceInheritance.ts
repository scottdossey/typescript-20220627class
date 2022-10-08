interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

interface Circle extends Shape, PenStroke {
    radius: number;
}

let square: Square = { color: "blue", sideLength: 5, penWidth: 7};