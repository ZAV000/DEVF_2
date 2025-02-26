const librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    console.log(librosLeidos);
}

// Ejemplo de uso
agregarLibro("El principito");
agregarLibro("1984");

mostrarLibrosLeidos();
