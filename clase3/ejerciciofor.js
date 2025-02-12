let frutas = ["fresa", "mango", "uva", "fresa", "kiwi", "mango", "uva", "kiwi", "fresa", "mango"];

let fresa = 0;
let mango = 0;
let uva = 0;
let kiwi = 0;

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] == "fresa") {
        fresa++;
    } else if (frutas[i] == "mango") {
        mango++;
    } else if (frutas[i] == "uva") {
        uva++;
    } else {
        kiwi++;
    }
}

console.log("Fresas:", fresa);
console.log("Mangos:", mango);
console.log("Uvas:", uva);
console.log("Kiwis:", kiwi);
