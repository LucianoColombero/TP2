const contenedor = document.querySelector(".container");

fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
        const nombresMostrados = new Set();

        data.forEach((personaje) => {
            if (!personaje.name || nombresMostrados.has(personaje.name)) {
                return;
            }

            nombresMostrados.add(personaje.name);

            const div = document.createElement("div");
            div.classList.add("card");

            const img = document.createElement("img");
            img.src = personaje.image || "https://http2.mlstatic.com/D_NQ_NP_644550-MLM73092738588_112023-O.webp";
            img.alt = personaje.name;

            const h2 = document.createElement("h2");
            h2.textContent = personaje.name;

            const p = document.createElement("p");
            p.textContent = `Casa: ${personaje.house}`;
            if (personaje.house === "") {
                p.textContent = "Desconocida";
            }

            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(p);

            contenedor.appendChild(div);
        });
    }).catch((error) => {
        console.error("Error fetching data:", error);
    });
