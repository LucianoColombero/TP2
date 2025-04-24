const apiKey = "Wb+Vy3keMhWXZhspTqZCwQ==3C6bOPsaDHj5SiFk";
const apiURL = "https://api.api-ninjas.com/v1/cars";

document.getElementById("car-form").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const marca = document.getElementById("marca").value.trim().toLowerCase();
    const modelo = document.getElementById("modelo").value.trim().toLowerCase();
    const combustible = document.getElementById("combustible").value.trim().toLowerCase();

    let query = [];

    if (marca) query.push(`make=${marca}`);
    if (modelo) query.push(`model=${modelo}`);
    if (combustible) query.push(`fuel_type=${combustible}`);

    const fullURL = `${apiURL}?${query.join("&")}`;
    console.log("Consultando:", fullURL); // Para debug

    fetch(fullURL, {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("resultado");
        container.innerHTML = "";

        if (data.length === 0) {
            container.innerHTML = "<p>No se encontraron autos con esos filtros.</p>";
            return;
        }

        data.forEach(auto => {
            container.innerHTML += `
                <div class="card">
                    <h2>${auto.make} ${auto.model} (${auto.year})</h2>
                    <p>Combustible: ${auto.fuel_type}</p>
                    <p>Cilindros: ${auto.cylinders}</p>
                    <p>Transmisión: ${auto.transmission}</p>
                    <hr>
                </div>
            `;
        });
    })
    .catch(error => {
        console.error("Error al buscar autos:", error);
    });
});
