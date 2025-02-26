const librosLeidos = [];

function agregarLibro(titulo, autor, anio, estado) {
    const libro = {
        titulo,
        autor,
        anio,
        estado,
        describirLibro: function () {
            console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en ${this.anio}. Estado: ${this.estado}.`);
        }
    };
    librosLeidos.push(libro);
}

function mostrarLibrosLeidos() {
    librosLeidos.forEach(libro => libro.describirLibro());
}

// Ejemplo de uso
agregarLibro("El principito", "Antoine de Saint-Exupéry", 1943, "disponible");
agregarLibro("1984", "George Orwell", 1949, "prestado");

mostrarLibrosLeidos();
