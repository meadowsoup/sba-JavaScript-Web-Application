document.getElementById("button").addEventListener("click", radarSearch);
document.getElementById("searchInput").addEventListener("keydown", function(event) {
     if (event.key === "Enter") {
          radarSearch(); 
     }
});

async function radarSearch() {
     const searchInput = document.getElementById("searchInput").value.trim();
     if (searchInput === "") {
          alert("🦵🏽");
          return;
     }
     const digiData = await fetchDigimon(searchInput.toLowerCase());
     displayData(digiData);
}

function displayData(data) {
     const digivice = document.getElementById("digivice");
     digivice.innerHTML = "";

     if (!data) {
          digivice.innerHTML = "MISSING";
          return;
     }
     const { name, images, levels, types, attributes, skills } = data;

     const imageUrl = images.length > 0 ? images[0].href : "placeholder.png";
     const level = levels.length > 0 ? levels[0].level : "Unknown";
     const type = types.length > 0 ? types[0].type : "Unknown";
     const attribute = attributes.map(attr => attr.attribute).join(", ") || "Unknown";
     const skillList = skills.slice(0, 3).map(skill => `<li>${skill.skill}: ${skill.description}</li>`).join("");

     digivice.innerHTML =
          `        <div class="card-content">
            <img src="${imageUrl}" alt="${name}">
            <h2>${name}</h2>
            <p><strong>Level:</strong> ${level}</p>
            <p><strong>Type:</strong> ${type}</p>
            <p><strong>Attribute:</strong> ${attribute}</p>
            <h3>Skills:</h3>
            <ul>${skillList}</ul>
        </div>
`;
}