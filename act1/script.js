const url = "https://randomuser.me/api/";

let personaCreada = function persona(){ 
    fetch(url)
  .then(result => result.json())
    .then(data => {
        const user = data.results[0];
        const name = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const phone = user.phone;
        const address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;
        const picture = user.picture.large;

        const userInfo = `
            <div class="card">
                <img src="${picture}" alt="User Picture">
                <h2>${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
            </div>
        `;
        document.getElementById("user").innerHTML = userInfo;
        document.getElementById("user").style.display = "block";
        document.getElementById("user").style.backgroundColor = "white";
        document.getElementById("user").style.border = "1px solid black";
        document.getElementById("user").style.padding = "20px";
    })
    .catch(error => console.error('Error:', error));
}

personaCreada();
