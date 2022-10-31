const fontSizeCtrl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

fontSizeCtrl.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value;
  textSize.style.fontSize = `${inputValue}px`;
});
