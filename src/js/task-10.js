function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

// CREATE
const createBoxes = () => {
  divBoxes.innerHTML = "";
  let dim = 30;
  let inputValue = input.value;

  if (inputValue > 100) {
    alert("Maximum value is 100.");
    return;
  } else if (inputValue === "") {
    alert("No boxes to create.");
    return;
  } else {
    for (let i = 0; i < inputValue; i++) {
      const box = document.createElement("div");
      divBoxes.append(box);

      box.style.height = dim + "px";
      box.style.width = dim + "px";
      box.style.backgroundColor = `${getRandomHexColor()}`;

      dim += 10;
    }
  }
};

// DESTROY
function destroyBoxes() {
  if (divBoxes.innerHTML === "") {
    alert("No boxes to destroy.");
  }
  divBoxes.innerHTML = "";
}

// btn handler
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
