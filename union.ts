/* Sometimes we may want to make something than can one 
 * one of many types.
 * For this we can use the Union Type operator, denoted by the "|" symbol
 */

/*
 * We are going to define a function called padLeft.
 * This function takes a string and adds "padding" to the
 * left of the string.  
 * 
 * If the 'padding' variable is a string, then that variable
 * is prepended to the left side.
 * 
 * if 'padding' variable is a number, then that number of 
 * space will be prepended to the left side
 */

function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding +1).join(" ") + value;
    } else if (typeof padding == "string") {
        return padding + value;
    } 
}

console.log(padLeft("Hello world", 4));
console.log(padLeft("Hello world", "-----"));
//console.log(padLeft("Hello World", true));