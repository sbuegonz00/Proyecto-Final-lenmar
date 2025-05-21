function addToFavorites(modelo, Descripcion, AnoFabricacion,precio,imagen) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    let coche = { modelo, Descripcion, AnoFabricacion, precio, imagen };

    // Evitar duplicados
    if (
        !favoritos.some(
            (fav) =>
                fav.modelo === modelo &&
                fav.Descripcion === Descripcion &&
                fav.AnoFabricacion === AnoFabricacion &&
                fav.precio === precio &&
                fav.imagen === imagen
        )
    ) {
        favoritos.push(coche);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".search-form form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const modelo = document.getElementById("modelo").value.toLowerCase();
        const precioMin = parseFloat(document.getElementById("precio-min").value) || 0;
        const precioMax = parseFloat(document.getElementById("precio-max").value) || Infinity;

        // Filtra sobre cochesData
        const filtrados = cochesData.filter(coche => {
            const modeloMatch = !modelo || coche.Modelo.toLowerCase().includes(modelo);
            const precio = parseFloat(coche.precio) || 0;
            const precioMatch = precio >= precioMin && precio <= precioMax;
            return modeloMatch  && precioMatch;
        });

        renderCoches(filtrados);
    });
});

let cochesData = [];

async function cargarCoches() {
    try {
        const res = await fetch("http://localhost:3000/api/coches");
        const coches = await res.json();
        console.log("Datos coches recibidos:", coches); // <-- Aquí
        cochesData = coches; // Guardar los datos en la variable global
        renderCoches(coches);
    } catch (err) {
        console.error("Error cargando coches:", err);
        const container = document.querySelector(".car-list");
        container.innerHTML = "<p>Error al cargar los coches.</p>";
    }
}

// ------------------- MOSTRAR COCHES ---------------------
function renderCoches(coches) {
    const carList = document.querySelector(".car-list");
    if (!carList) {
        console.error("No se encontró el contenedor .car-list");
        return;
    }
    carList.innerHTML = ""; // limpiar contenedor

    coches.forEach((coche) => {
        const carItem = document.createElement("div");
        carItem.classList.add("car-item");

        // Si no tienes imagen, puedes poner un path local o dejar vacío (evita placeholder externo)
        const imagenSrc = coche.imagen || "./img/default-car.png";

        carItem.innerHTML = `
        <img src="${imagenSrc}" alt="${coche.Modelo}">
        <div class="car-details">
        <h3>${coche.Modelo}</h3>
        <p>Color: ${coche.Color}</p>
        <p>Año: ${coche.AnoFabricacion}</p>
        <p>Descripción: ${coche.Descripcion}</p>
        <p>Precio: ${coche.precio}</p>
        <button class="details-btn">Ver Detalles</button>
        <button class="fav-btn">Añadir a Favoritos</button>
        </div>
    `;

        const detailsBtn = carItem.querySelector(".details-btn");
        if (detailsBtn) {
            detailsBtn.addEventListener("click", () => {
                viewDetails(coche.Modelo, coche.Descripcion, coche.AnoFabricacion);
            });
        } else {
            console.warn("No se encontró botón detalles en un coche.");
        }

        const favBtn = carItem.querySelector(".fav-btn");
        if (favBtn) {
            favBtn.addEventListener("click", () => {
                addToFavorites(
                    coche.Modelo,
                    coche.Descripcion,
                    coche.AnoFabricacion,
                    coche.precio,
                    imagenSrc
                );
            });
        } else {
            console.warn("No se encontró botón favoritos en un coche.");
        }

        carList.appendChild(carItem);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cargarCoches();
    setupSearchForm();
});