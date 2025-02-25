import { getDigimons, postDigimon } from "./api";

const displayDigimons = (digimons) => {
     const container = document.getElementById('digimon-container');
     container.innerHTML = '';
     digimons.forEach(digimon => {
          const digimonElement = document.createElement('div');
          digimonElement.classList.add('digimon');
          digimonElement.innerHTML = `
          <h2>${digimon.name}</h2>
          <img src="${digimon.img}" alt="${digimon.name}" />`;

          container.appendChild(digimonElement);
     });
};