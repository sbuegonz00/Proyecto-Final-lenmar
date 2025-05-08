function addToFavorites(marca, precio, ubicacion, imagen) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    let coche = { marca, precio, ubicacion, imagen };

    // Evitar duplicados
    if (!favoritos.some(fav => fav.marca === marca && fav.precio === precio && fav.ubicacion === ubicacion)) {
        favoritos.push(coche);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    } else {
    }
}
