function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

input.value = 3;

// CREATE
const createBoxes = (amount) => {
  let dim = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    divBoxes.append(box);

    box.style.height = dim + "px";
    box.style.width = dim + "px";
    box.style.backgroundColor = `${getRandomHexColor()}`;
    divBoxes.style.display = "flex";
    divBoxes.style.gap = "10px";

    dim += 10;
  }
};

btnCreate.addEventListener("click", createBoxes(input.value));

// DESTROY
// function destroyBoxes() {}
