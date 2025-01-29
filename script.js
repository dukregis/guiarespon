document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const mainContent = document.getElementById("main-content");
    const menuItems = document.querySelectorAll(".side-menu .menu li"); // Todos los elementos de menú

    // Mostrar/Ocultar el menú al hacer clic en el ícono
    menuToggle.addEventListener("click", function () {
        sideMenu.classList.toggle("active");
        mainContent.classList.toggle("active"); // Desplaza el contenido
    });

    // Cerrar el menú cuando se haga clic en cualquier enlace del menú
    menuItems.forEach(function(item) {
        item.addEventListener("click", function() {
            sideMenu.classList.remove("active");
            mainContent.classList.remove("active"); // Volver el contenido a su posición original
        });
    });
});
