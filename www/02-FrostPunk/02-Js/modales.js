function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("modal-body").innerHTML = ""; // Limpia el contenido del modal
}

function openModal(content) {
    document.getElementById("modal-body").innerHTML = content;
    document.getElementById("myModal").style.display = "block";
}

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            openModal(data);
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
}