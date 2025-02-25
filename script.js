import { getDigimon, postDigimon } from "./api";

const displayDigimon = (digimon) => {
     const container = document.getElementById('digimon-container');
     container.innerHTML = '';

     digimon.forEach(digimon => {
          const digimonElement = document.createElement('div');
          digimonElement.classList.add('digimon');

          digimonElement.innerHTML = `
               <h2>${digimon.name}</h2>
               <img src="${digimon.images[0].href}" alt="${digimon.name}" />
               <p><strong>Level:</strong> ${digimon.levels ? digimon.levels[0].level : "Unknown"}</p>
               <p><strong>Type:</strong> ${digimon.types ? digimon.types[0].type : "Unknown"}</p>
               `;

          container.appendChild(digimonElement);
     });
};

const loadDigimon = async (page = 1) => {
     const digimon = await getDigimon(page);
     displayDigimon(digimon);
};

loadDigimon();

let currentPage = 1;

document.getElementById('load-more').addEventListener('click', () => {
     currentPage++;
     loadDigimon(currentPage);
})