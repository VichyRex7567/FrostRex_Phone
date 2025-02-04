function iniciarAnimacion() {
    // Oculta la imagen, el párrafo y muestra la tabla al hacer clic en la imagen
    var imagen = document.getElementById('imagen');
    var pulsa = document.getElementById('pulsa');
    var tabla = document.getElementById('tabla');

    // Agrega la clase 'oculto' para ocultar la imagen y el párrafo
    imagen.classList.add('oculto');
    pulsa.classList.add('oculto');

    // Espera a que termine la animación de desvanecimiento
    setTimeout(function () {
        // Agrega la clase 'mostrado' para mostrar la tabla
        tabla.classList.add('mostrado');
    }, 1000); // Tiempo igual a la duración de la transición de la imagen
}

function iniciarReproduccion() {
    var miAudio = document.getElementById('miAudio');
    miAudio.play();
}
