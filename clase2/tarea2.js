// Declaramos una variable con una nota de ejemplo (puedes cambiarla o hacerla aleatoria)
let nota = 85; // Cambia este valor para probar diferentes casos

// Verificamos que la nota sea un número válido
if (typeof nota === "number" && nota >= 0 && nota <= 100) {
    let mensaje;
    
    if (nota >= 90) {
        mensaje = "Excelente";
    } else if (nota >= 75) {
        mensaje = "Bien";
    } else if (nota >= 60) {
        mensaje = "Suficiente";
    } else {
        mensaje = "No aprobado";
    }
    
    console.log(`El estudiante obtuvo una nota de ${nota}: ${mensaje}`);
} else {
    console.log("Error: La nota debe ser un número entre 0 y 100.");
}
