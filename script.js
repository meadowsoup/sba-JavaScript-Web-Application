import { getDigimon, postDigimon } from "./api";

const displayDigimon = (digimon) => {
     const container = document.getElementById('digimon-container');
     container.innerHTML = '';
     digimon.forEach(digimon => {
          const digimonElement = document.createElement('div');
          digimonElement.classList.add('digimon');
          digimonElement.innerHTML = `
          <h2>${digimon.name}</h2>
          <img src="${digimon.img}" alt="${digimon.name}" />`;

          container.appendChild(digimonElement);
     });
};

const loadDigimon = async (page = 1) => {
     const digimon = await getDigimon(page);
     displayDigimon(digimon);
};

loadDigimon();