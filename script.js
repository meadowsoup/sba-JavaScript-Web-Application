import { fetchQuote } from "./api";

const quoteDisplay = document.getElementById("quoteDisplay");
const authorDisplay = document.getElementById("authorDisplay");
const getQuoteButton = document.getElementById("getQuoteButton");
const saveQuoteButton = document.getElementById("saveQuoteButton");
const favoritesList = document.getElementById("favoritesList");

let currentQuote = {};

getQuoteButton.addEventListener("click", async () => {
     currentQuote = await fetchQuote();
})