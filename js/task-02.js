const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("#ingredients");
console.log(ingredientsEl);

const addElement = (ingredient) => {
  const newEl = document.createElement("li");
  newEl.textContent = ingredient;
  return newEl;
};
const elements = ingredients.map(addElement);
console.log(elements);
ingredientsEl.append(...elements);

//  #2
// const ingredientsEl = document.querySelector("#ingredients");
// console.log(ingredientsEl);

// const liElements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const newEl = document.createElement("li");
//   newEl.textContent = ingredients[i];
//   liElements.push(newEl);
// }
// ingredientsEl.append(...liElements);
