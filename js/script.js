//https://glitch.com/edit/#!/r-p-s-project?path=js%2Fscript.js%3A1%3A11
//https://glitch.com/edit/#!/manahil?path=js%2Fscript.js%3A54%3A0
$(".play").click(function () {
  let userChoice = $(".input").val();
  $(".userChoice").text(userChoice);
  let randomNumber = Math.ceil(Math.random() * 3);
  console.log("randomNumber");

  let computerChoice;
  if (randomNumber === 1) {
    computerChoice = "rock";
    $(".computerChoice").text(computerChoice);
  } else if (randomNumber === 2) {
    computerChoice = "paper";
    $(".computerChoice").text(computerChoice);
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
    $(".computerChoice").text(computerChoice);
  }
let result;
if (userChoice === "rock" && computerChoice === "rock") {
    result = "It's a tie!";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result = "You win!";
  } else if (userChoice === "scissor" && computerChoice === "rock") {
    result = "Computer wins!";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    result = "Computer wins!";
  } else if (userChoice === "paper" && computerChoice === "paper") {
    result = "It's a tie";
  } else if (userChoice === "scissor" && computerChoice === "paper") {
    result = "You win!";
  } else if (userChoice === "rock" && computerChoice === "scissor") {
    result = "You win!";
  } else if (userChoice === "paper" && computerChoice === "scissor") {
    result = "Computer wins!";
  } else if (userChoice === "scissor" && computerChoice === "scissor") {
    result = "It's a tie!";}
$(".result").text(result);
  
});