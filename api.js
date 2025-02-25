export const getDigimon = async (page = 1) => {
     const response = await fetch(`https://digi-api.com/digimon?page=${page}`);
     const data = await response.json();
     return data;
}

export const postDigimon = async (digimonData) => {
     const response = await fetch('https://digi-api.com/digimon', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(digimonData)
     });
     const data = await response.json();
     return data;
}