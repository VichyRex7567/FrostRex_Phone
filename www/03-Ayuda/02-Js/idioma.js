function cambiarIdioma() {
    var idioma = document.getElementById("idiomaSelect").value;

    // Tablas
    var tablaEs1 = document.getElementById("tablaEs1");
    var tablaEn1 = document.getElementById("tablaEn1");
    var tablaEs2 = document.getElementById("tablaEs2");
    var tablaEn2 = document.getElementById("tablaEn2");

    // Contenido con spans
    var spansEs = document.querySelectorAll(".espanol");
    var spansEn = document.querySelectorAll(".ingles");

    if (idioma === "espanol") {
        // Mostrar tablas y spans en español, ocultar tablas y spans en inglés
        tablaEs1.style.display = "";
        tablaEn1.style.display = "none";
        tablaEs2.style.display = "";
        tablaEn2.style.display = "none";

        spansEs.forEach(function(span) {
            span.style.display = "inline";
        });

        spansEn.forEach(function(span) {
            span.style.display = "none";
        });
    } else if (idioma === "ingles") {
        // Mostrar tablas y spans en inglés, ocultar tablas y spans en español
        tablaEs1.style.display = "none";
        tablaEn1.style.display = "";
        tablaEs2.style.display = "none";
        tablaEn2.style.display = "";

        spansEs.forEach(function(span) {
            span.style.display = "none";
        });

        spansEn.forEach(function(span) {
            span.style.display = "inline";
        });
    }
}
