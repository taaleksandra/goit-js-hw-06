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
  list.append(liItem);
});
