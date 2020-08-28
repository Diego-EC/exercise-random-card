import "../style/styles.css";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomCardSuit());
  document.querySelector(".card").innerHTML = generateRandomCardNumber();
};

function generateRandomCardSuit() {
  const arrSuits = ["hearts", "spades", "clubs", "diamonds"];

  let indexSuit = Math.floor(Math.random() * arrSuits.length);
  return arrSuits[indexSuit];
}

function generateRandomCardNumber() {
  const arrNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexNumber = Math.floor(Math.random() * arrNumbers.length);
  return arrNumbers[indexNumber];
}
