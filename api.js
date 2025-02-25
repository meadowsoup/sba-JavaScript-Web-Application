const API_KEY = "GIhgX29HmopuMDoo49yLmg==utPCkaGmBgbmVWX7";

export async function fetchQuote() {
     try {
          const response = await fetch("https://zenquotes.io/api/random");
          const data = await response.json();
          return {text: data[0].q, author: data[0].a};
     } catch(error) {
          console.error("Error fetching quote:", error);
          return {text: "Oops! Couldn't fetch a quote.", author: "Unknown"};
     }
}