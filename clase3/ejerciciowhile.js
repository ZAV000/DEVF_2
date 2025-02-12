let frutas = ["fresa", "mango", "uva", "fresa", "kiwi", "mango", "uva", "kiwi", "fresa", "mango"];

let fresa = 0;
let mango = 0;
let uva = 0;
let kiwi = 0;

let i = 0;

while (i < frutas.length) {
    if (frutas[i] == "fresa") {
        fresa++;
    } else if (frutas[i] == "mango") {
        mango++;
    } else if (frutas[i] == "uva") {
        uva++;
    } else {
        kiwi++;
    }
    i++; 
}

console.log("Fresas:", fresa);
console.log("Mangos:", mango);
console.log("Uvas:", uva);
console.log("Kiwis:", kiwi);
