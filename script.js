// Create individual square
let container = document.querySelector(".container");
let squareNumber = document.querySelector("#square-number");
let squareGenerationButton = document.querySelector("#square-generation-button");

// Define square properties
// newSquare.classList.add("square");
// newSquare.style.backgroundColor = "yellow";

// Create squares dinamically
squareGenerationButton.addEventListener("click", function () {
  if (squareNumber.value < 1 || squareNumber.value > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    for (let i = 0; i < squareNumber.value * squareNumber.value; i++) {
      container.style.width = `${Number(squareNumber.value) * 16}px`;
      container.style.height = `${Number(squareNumber.value) * 16}px`;
      console.log(Number(squareNumber.value));

      let newSquare = document.createElement("div");
      newSquare.classList.add("square");
      newSquare.style.backgroundColor = "yellow";
      container.appendChild(newSquare);

      newSquare.addEventListener("mouseover", function () {
        if (newSquare.style.backgroundColor === "yellow") {
          newSquare.style.backgroundColor = "black";
        } else {
          newSquare.style.backgroundColor = "yellow";
        }
      });
    }
  }
});

// Change color of square on mouseover
// squareSelected.addEventListener("mouseover", function () {
//   if (newSquare.style.backgroundColor === "yellow") {
//     newSquare.style.backgroundColor = "black";
//   } else {
//     newSquare.style.backgroundColor = "yellow";
//   }
// });
