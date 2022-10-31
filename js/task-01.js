const categories = document.querySelectorAll(".item");

const par = document.body.firstElementChild;
const list = par.nextElementSibling;

// FIRST CATEGORY
const fstItem = list.firstElementChild;
const fstCat = fstItem.firstElementChild;
const fstItemElem = fstItem.querySelectorAll("li");

// SECOND CATEGORY
const scItem = fstItem.nextElementSibling;
const scCat = scItem.firstElementChild;
const scItemElem = scItem.querySelectorAll("li");

// LAST CATEGORY
const lstItem = list.lastElementChild;
const lstCat = lstItem.firstElementChild;
const lstItemElem = lstItem.querySelectorAll("li");

// RESULTS
console.log("Number of categories: ", categories.length);
console.log("");
console.log("Category: ", fstCat.textContent);
console.log("Elements: ", fstItemElem.length);
console.log("");
console.log("Category: ", scCat.textContent);
console.log("Elements: ", scItemElem.length);
console.log("");
console.log("Category: ", lstCat.textContent);
console.log("Elements: ", lstItemElem.length);
console.log("");
