/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  let cardElement = document.querySelector(".card");
  cardElement.classList.add(generateRandomSuit());
  cardElement.innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
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
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);

  return suit[indexSuit];
};
