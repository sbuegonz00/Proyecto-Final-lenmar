// ------------------- CARGAR COCHES ---------------------
async function cargarCoches() {
  try {
    const res = await fetch('http://localhost:3000/api/coches');
    const coches = await res.json();
    console.log("Datos coches recibidos:", coches); // <-- Aquí
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

  coches.forEach(coche => {
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
        addToFavorites(coche.Modelo, coche.Descripcion, coche.AnoFabricacion, imagenSrc);
      });
    } else {
      console.warn("No se encontró botón favoritos en un coche.");
    }

    carList.appendChild(carItem);
  });
}

// ------------------- FAVORITOS ---------------------
function addToFavorites(marca, precio, ubicacion, imagen) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  let coche = { marca, precio, ubicacion, imagen };

  if (!favoritos.some(fav => fav.marca === marca && fav.precio === precio && fav.ubicacion === ubicacion)) {
    favoritos.push(coche);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
}

// ------------------- DETALLES ---------------------
function viewDetails(marca, precio, ubicacion) {
  const carDetails = { marca, precio, ubicacion };
  localStorage.setItem("carDetails", JSON.stringify(carDetails));
  window.location.href = "detalles_coche.html";
}

// ------------------- FILTRO DE BÚSQUEDA ---------------------
function setupSearchForm() {
  const form = document.querySelector(".search-form form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const marca = document.getElementById("marca").value.toLowerCase();
    const modelo = document.getElementById("modelo").value.toLowerCase();
    const precioMin = parseFloat(document.getElementById("precio-min").value) || 0;
    const precioMax = parseFloat(document.getElementById("precio-max").value) || Infinity;

    const carItems = document.querySelectorAll(".car-item");

    carItems.forEach(car => {
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
}

// ------------------- INICIO ---------------------
document.addEventListener("DOMContentLoaded", () => {
  cargarCoches();
  setupSearchForm();
});




