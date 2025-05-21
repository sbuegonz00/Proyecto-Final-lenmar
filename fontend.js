

//OBTENER TODAS LAS PELÍCULAS
fetch("http://localhost:3000/api/coches")
  .then((response) => response.json())
  .then((data) => {
    ("Coches:", data);
  })
  .catch((error) => console.error("Error:", error));
