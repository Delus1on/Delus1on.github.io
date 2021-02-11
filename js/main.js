function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

const bid = document.querySelector(".prices__bid").textContent = "€" + getRandomInt(1200, 4599);
const ask = document.querySelector(".prices__ask").textContent = "€" + getRandomInt(1200, 4599);


