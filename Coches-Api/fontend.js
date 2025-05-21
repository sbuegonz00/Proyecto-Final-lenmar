//ESTE ARCHIVO ES UN EJEMPLO DE CÓMO HACER UNA PETICIÓN A AL SERVIDOR DE NODE JS DESDE EL FRONTEND


//OBTENER TODAS LAS PELÍCULAS
fetch("http://localhost:3000/api/coches")
  .then((response) => response.json())
  .then((data) => {
    ("Coches:", data);
  })
  .catch((error) => console.error("Error:", error));





//--------------------------------------------------------------------------------------------
//INSERTAR UNA NUEVA PELÍCULA
fetch("http://localhost:3000/api/coches", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    titulo: "Relatos salvajes",
    director: "Damián Szifron",
    anio: 2014,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Película insertada:", data);
  })
  .catch((error) => console.error("Error:", error));



//--------------------------------------------------------------------------------------------
//ACTUALIZAR UNA PELÍCULA
const id = 1; // Cambia esto al ID que quieras actualizar

fetch(`http://localhost:3000/api/coches/${id}`, {
method: "PUT",
headers: {
    "Content-Type": "application/json",
},
body: JSON.stringify({
    titulo: "Relatos salvajes (Versión extendida)",
    director: "Damián Szifron",
    anio: 2014,
}),
})
.then((response) => response.json())
.then((data) => {
    console.log("Película actualizada:", data);
})
.catch((error) => console.error("Error:", error));



//--------------------------------------------------------------------------------------------
//ELIMINAR UNA PELÍCULA
const id = 1; // Cambia esto al ID que quieras eliminar

fetch(`http://localhost:3000/api/movies/${id}`, {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Película eliminada:", data);
  })
  .catch((error) => console.error("Error:", error));



