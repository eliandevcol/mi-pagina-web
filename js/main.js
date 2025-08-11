// Creamos una variable para almacenar la ubicación del scroll
// y la inicializamos con el valor de pageYOffset
let ubicacionPrincipal = window.pageYOffset;

// Inicializamos AOS (Animate On Scroll) para animaciones al hacer scroll
// AOS es una biblioteca que permite agregar animaciones
AOS.init();

// Agregamos un evento de scroll a la ventana
// para detectar el desplazamiento del usuario
window.addEventListener("scroll", function() {
    // Obtenemos la ubicación actual del scroll
    // y la almacenamos en desplazamientoActual
    let desplazamientoActual = window.pageYOffset;

    // Si la ubicación del scroll es mayor o igual
    // a la ubicación principal, mostramos el menú
    if (ubicacionPrincipal >= desplazamientoActual) {
        // Cambiamos el estilo del menú para que se muestre
        // en la parte superior de la página
        document.getElementsByTagName("nav")[0].style.top = "0px";
    } else {
        // Si la ubicación del scroll es menor, ocultamos el menú
        // cambiando su estilo para que se desplace hacia arriba
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }

    // Actualizamos la ubicación principal con el valor actual
    // para que en la próxima iteración podamos comparar
    ubicacionPrincipal = desplazamientoActual;
})

// Seleccionamos el primer elemento con la clase enlaces-header
// y lo almacenamos en la variable enlacesHeader
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
// Creamos una variable semaforo para controlar el estado del menú
// y la inicializamos en true, indicando que el menú está cerrado
let semaforo = true;

// Agregamos un evento de clic al elemento con la clase hamburger
// para alternar el estado del menú al hacer clic
document.querySelector(".hamburger").addEventListener("click", function() {
    // Cambiamos el color del icono de la hamburguesa
    // dependiendo del estado del semáforo
    if (semaforo) {
        document.querySelector(".hamburger").style.color = "#fff";
        semaforo = false;
    } else {
        // Si el semáforo está en false, cambiamos el color
        // del icono de la hamburg
        document.querySelector(".hamburger").style.color = "#000";
        semaforo = true;
    }
    // Alternamos la clase menudos en el elemento enlacesHeader
    // para mostrar u ocultar el menú al hacer clic
    enlacesHeader.classList.toggle("menudos");
})