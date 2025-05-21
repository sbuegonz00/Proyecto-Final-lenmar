function addToFavorites(marca, precio, ubicacion, imagen) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    let coche = { marca, precio, ubicacion, imagen };

    // Evitar duplicados
    if (!favoritos.some(fav => fav.marca === marca && fav.precio === precio && fav.ubicacion === ubicacion)) {
        favoritos.push(coche);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".search-form form");
    const carList = document.querySelectorAll(".car-item");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const marca = document.getElementById("marca").value.toLowerCase();
        const modelo = document.getElementById("modelo").value.toLowerCase();
        const precioMin = parseFloat(document.getElementById("precio-min").value) || 0;
        const precioMax = parseFloat(document.getElementById("precio-max").value) || Infinity;

        carList.forEach(car => {
            const carMarcaModelo = car.querySelector("h3").textContent.toLowerCase();
            const carPrecio = parseFloat(car.querySelector("p").textContent.replace(/\D/g, ''));

            const marcaMatch = !marca || carMarcaModelo.includes(marca);
            const modeloMatch = !modelo || carMarcaModelo.includes(modelo);
            const precioMatch = carPrecio >= precioMin && carPrecio <= precioMax;

            if (marcaMatch && modeloMatch && precioMatch) {
                car.style.display = "block";
            } else {
                car.style.display = "none";
            }
        });
    });
});







