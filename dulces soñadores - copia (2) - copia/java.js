function abrirMenu() {
            document.getElementById("miBarra").classList.add("abierta");
        }
function cerrarMenu() {
            document.getElementById("miBarra").classList.remove("abierta");
        }

let indiceImagen = 0;

function cambiarImagen(direccion) {

    const imagenes = document.querySelectorAll(".slide");

    imagenes[indiceImagen].classList.remove("activa");
    
    indiceImagen += direccion;
    if (indiceImagen >= imagenes.length) {
        indiceImagen = 0;
    }

    if (indiceImagen < 0) {
        indiceImagen = imagenes.length - 1;
    }

    imagenes[indiceImagen].classList.add("activa");
}
// Movimiento automático del carrusel cada 4 segundos
setInterval(() => {
    cambiarImagen(1);
}, 4000);