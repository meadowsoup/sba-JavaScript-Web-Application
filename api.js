export const getDigimon = async (page = 1) => {
     const response = await fetch(`https://digi-api.com/api/v1/digimon?page=${page}`);
     const data = await response.json();
     return data.content;
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