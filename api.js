const dbURL = "https://digi-api.com/api/v1/digimon/";

async function fetchDigimon(name) {
     try {
          const response = await fetch (`${dbURL}${name}`);
          if (!response.ok) {
               throw new Error ("No Digimon Found 😤");
          }
          const data = await response.json();
          return data;
     } catch (error) {
          console.error(error);
          
     }
}