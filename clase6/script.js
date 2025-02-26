function agregarComentario() {
    const comentarioTexto = document.getElementById("comentario").value.trim();
    
    if (comentarioTexto === "") {
        alert("El comentario no puede estar vacío.");
        return;
    }

    // Crear el elemento del comentario
    const comentario = document.createElement("div");
    comentario.classList.add("comentario");

    // Obtener la fecha y hora actual
    const fecha = new Date().toLocaleString();

    comentario.innerHTML = `
        <p>${comentarioTexto}</p>
        <span class="fecha">${fecha}</span>
        <button onclick="eliminarComentario(this)">Eliminar</button>
    `;

    // Agregar el comentario a la lista
    document.getElementById("listaComentarios").appendChild(comentario);

    // Limpiar el campo de texto
    document.getElementById("comentario").value = "";
}

function eliminarComentario(boton) {
    boton.parentElement.remove();
}
