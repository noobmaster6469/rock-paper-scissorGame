let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let rock_block = document.body.getElementsByClassName("rock")[0];
let paper_block = document.body.getElementsByClassName("paper")[0];
let scissor_block = document.body.getElementsByClassName("scissor")[0];
let reset = document.getElementById("reset");
let display = document.body.getElementsByClassName("display")[0];
let gameCondition = 1;
display.innerHTML = "<h2>Chose any one button</h2>";
let images = document.body.querySelectorAll(".card");
let rock_img = document.body.getElementsByTagName("img")[0];
let paper_img = document.body.getElementsByTagName("img")[1];
let scissor_img = document.body.getElementsByTagName("img")[2];
let result = document.body.getElementsByClassName("result")[0];

rock.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 3);
  display.innerHTML = "<h2>You chose Rock</h2>";
  if (randomNumber == 0) {
    rock_img.style.display = "block";
    paper_img.style.display = "none";
    scissor_img.style.display = "none";
    result.innerHTML = "<h1>Draw!!</h1>";
    document.body.style.background = "rgb(168, 168, 1)";
  } else if (randomNumber == 1) {
    rock_img.style.display = "none";
    paper_img.style.display = "block";
    scissor_img.style.display = "none";
    result.innerHTML = "<h1>LOOSE!!</h1>";
    document.body.style.background = "rgb(158, 4, 4)";
  } else if (randomNumber == 2) {
    rock_img.style.display = "none";
    paper_img.style.display = "none";
    scissor_img.style.display = "block";
    result.innerHTML = "<h1>WIN!!</h1>";
    document.body.style.background = "rgb(28, 128, 28)";
  }
});
paper.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 3);
  display.innerHTML = "<h2>You chose Paper</h2>";
  if (randomNumber == 0) {
    rock_img.style.display = "block";
    paper_img.style.display = "none";
    scissor_img.style.display = "none";
    result.innerHTML = "<h1>WIN!!</h1>";
    document.body.style.background = "rgb(28, 128, 28)";
  } else if (randomNumber == 1) {
    rock_img.style.display = "none";
    paper_img.style.display = "block";
    scissor_img.style.display = "none";
    result.innerHTML = "<h1>Draw!!</h1>";
    document.body.style.background = "rgb(168, 168, 1)";
  } else if (randomNumber == 2) {
    rock_img.style.display = "none";
    paper_img.style.display = "none";
    scissor_img.style.display = "block";
    result.innerHTML = "<h1>LOOSE!!</h1>";
    document.body.style.background = "rgb(158, 4, 4)";
  }
});
scissor.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 3);
  display.innerHTML = "<h2>You chose Scissor</h2>";
  if (randomNumber == 0) {
    rock_img.style.display = "block";
    paper_img.style.display = "none";
    scissor_img.style.display = "none";
    result.innerHTML = "<h1>LOOSE!!</h1>";
    document.body.style.background = "rgb(158, 4, 4)";
  } else if (randomNumber == 1) {
    rock_img.style.display = "none";
    paper_img.style.display = "block";
    scissor_img.style.display = "none";
    result.innerHTML = "<h1>WIN!!</h1>";
    document.body.style.background = "rgb(28, 128, 28)";
  } else if (randomNumber == 2) {
    rock_img.style.display = "none";
    paper_img.style.display = "none";
    scissor_img.style.display = "block";
    result.innerHTML = "<h1>DRAW!!</h1>";
    document.body.style.background = "rgb(168, 168, 1)";
  }
});
reset.addEventListener("click", () => {
  display.innerHTML = "<h2>Chose any one button</h2>";
  rock_img.style.display = "block";
  paper_img.style.display = "block";
  scissor_img.style.display = "block";
  result.innerHTML = "<h1></h1>";
  document.body.style.background = "#8ec5fc";
});
