document.addEventListener("DOMContentLoaded", function () {
    mostrarFavoritos();

    function mostrarFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        const contenedor = document.getElementById("favoritos-list");
        contenedor.innerHTML = "";

        if (favoritos.length === 0) {
            contenedor.innerHTML = "<p>No tienes coches en favoritos.</p>";
            return;
        }

        favoritos.forEach((coche, index) => {
            const div = document.createElement("div");
            div.className = "car-item";
            div.innerHTML = `
        ${coche.imagen
                    ? `<img src="${coche.imagen}" alt="Imagen de coche" style="max-width:100%; margin-bottom:1rem;">`
                    : ""
                }
        <h3>${coche.marca} ${coche.modelo}</h3>
        <p>Precio: ${coche.precio}</p>
        <button class="eliminar-fav" data-index="${index}">Eliminar</button>
    `;
            contenedor.appendChild(div);
        });

        document.querySelectorAll(".eliminar-fav").forEach((btn) => {
            btn.addEventListener("click", function () {
                eliminarFavorito(this.dataset.index);
            });
        });
    }

    function eliminarFavorito(index) {
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        favoritos.splice(index, 1);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        mostrarFavoritos();
    }
});
