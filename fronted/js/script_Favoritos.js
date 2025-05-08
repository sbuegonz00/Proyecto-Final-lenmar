function loadFavorites() {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    let container = document.getElementById("favorites-container");

    if (favoritos.length === 0) {
        container.innerHTML = "<p>No tienes coches en favoritos.</p>";
        return;
    }

    favoritos.forEach((coche) => {
        let div = document.createElement("div");
        div.classList.add("car-item");
        div.innerHTML = `
                    <img src="${coche.imagen}" alt="${coche.marca}">
                    <div class="car-details">
                        <h3>${coche.marca}</h3>
                        <p>Precio: ${coche.precio}€</p>
                        <p>Ubicación: ${coche.ubicacion}</p>
                        <button onclick="removeFavorite('${coche.marca}', ${coche.precio}, '${coche.ubicacion}')">Eliminar</button>
                    </div>
                `;
        container.appendChild(div);
    });
}

function removeFavorite(marca, precio, ubicacion) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos = favoritos.filter(
        (coche) =>
            coche.marca !== marca ||
            coche.precio !== precio ||
            coche.ubicacion !== ubicacion
    );
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    location.reload(); // Recargar la página para actualizar la lista
}

window.onload = loadFavorites;
