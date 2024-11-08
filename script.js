// Create individual square
let newSquare = document.createElement("div");
newSquare.classList.add("square");
newSquare.style.backgroundColor = "yellow";

// Change color of square on mouseover
newSquare.addEventListener("mouseover", function () {
  if (newSquare.style.backgroundColor === "yellow") {
    newSquare.style.backgroundColor = "black";
  } else {
    newSquare.style.backgroundColor = "yellow";
  }
});

let container = document.querySelector(".container");
container.appendChild(newSquare);
