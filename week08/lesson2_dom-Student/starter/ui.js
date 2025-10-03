// Step 1: Create an array to hold quote objects

let quotes = [];

import { addQuote, getAllQuotes } from "./quote.js";

// Step 2: Select the DOM element where quotes will be rendered

const quoteList = document.getElementById("quote-list");

function addNewQuote(content, author) {
  addQuote(content, author);
}

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList

function renderQuotes() {
    quoteList.innerHTML = "";
    const allQuotes = getAllQuotes();
    allQuotes.forEach(quote => {
        const p = document.createElement("p");
        p.textContent = `"${quote.content}" — ${quote.author}`; // ใช้ dash ยาว
        quoteList.appendChild(p);
    });
}

// Step 4: Add test quotes manually and call renderQuotes()
// Example:
// addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
// renderQuotes();
// Step 4: Add test quotes manually

addNewQuote("Stay hungry, stay foolish.", "Steve Jobs");
addNewQuote("Do or do not. There is no try.", "Yoda");
addNewQuote("Simplicity is the ultimate sophistication.", "Leonardo da Vinci");

renderQuotes();
