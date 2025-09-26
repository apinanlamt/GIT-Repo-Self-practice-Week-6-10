const btn = document.getElementById("btnChange")
const title = document.getElementById("title")

btn.addEventListener("click", () => {
  title.textContent = "Hello DOM!"
})

// ----------------------------------------------------------------

const btnAdd = document.getElementById("btnAdd")
const fruitList = document.getElementById("fruitList")

btnAdd.addEventListener("click", () => {
  const newFruit = document.createElement("li")
  newFruit.textContent = "Mango"
  fruitList.appendChild(newFruit)
})

// ----------------------------------------------------------------

const btnToggle = document.getElementById("btnToggle")
const message = document.getElementById("message")

btnToggle.addEventListener("click", () => {
  if (message.style.display === "none") {
    message.style.display = "block"
  } else {
    message.style.display = "none"
  }
})

// ----------------------------------------------------------------

const btnCount = document.getElementById("btnCount")
const countText = document.getElementById("count")
let counter = 0

btnCount.addEventListener("click", () => {
  counter++
  countText.textContent = `Clicked: ${counter} times`
})

// ----------------------------------------------------------------

const btnName = document.getElementById("btnName")
const greeting = document.getElementById("greeting")

btnName.addEventListener("click", () => {
  const name = prompt("What is your name?", "Your Name")
  if (name) {
    greeting.textContent = `Hello, ${name}!`
  }
})

// ----------------------------------------------------------------

// เพิ่มเติม
const popCat = document.getElementById("popCat");
const popScore = document.getElementById("popScore");

let catScore = 0;
const catClosed = "./img/cat_closed.png";
const catOpen = "./img/cat_open.png";

popCat.addEventListener("click", () => {
  catScore++;
  popScore.textContent = catScore;

  popCat.src = catOpen;

  setTimeout(() => {
    popCat.src = catClosed;
  }, 300);
});

