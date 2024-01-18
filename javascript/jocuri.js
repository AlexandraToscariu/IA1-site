const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100);
let chance = 10;

checkButton.addEventListener("click", () => {
  chance--;
  let inputValue = input.value;

  if (inputValue == randomNum) {

    [guess.textContent, input.disabled] = ["Felicitări", true];
    [checkButton.textContent, guess.style.color] = ["Să mai jucăm!", "#333"];

  } else if (inputValue > randomNum && inputValue < 100) {

    [guess.textContent, remainChances.textContent] = ["Numărul este mai mic!", chance];
    guess.style.color = "#333";
  } else if (inputValue < randomNum && inputValue > 0) {
    [guess.textContent, remainChances.textContent] = ["Numărul este mai mare!", chance];
    guess.style.color = "#333";
  } else {
    [guess.textContent, remainChances.textContent] = ["Nu ai ales un număr!", chance];
    guess.style.color = "#DE0611";
  }
  if (chance == 0) {
    [checkButton.textContent, input.disabled, inputValue] = ["Să mai jucăm!", true, ""];
    [guess.textContent, guess.style.color] = ["Ai pierdut!", "#DE0611"];
  }
  if (chance < 0) {
    window.location.reload();
  }
});