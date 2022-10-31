const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach(function callback(item, index) {
  const liItem = document.createElement("li");
  liItem.textContent = item;
  liItem.classList.add("item");
  list.append(liItem);
});
