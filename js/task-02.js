const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);

const addElement = ingredient => {
  const newEl = document.createElement('li');
  newEl.textContent = ingredient;
  ingredientsEl.appendChild(newEl);
  return ingredientsEl;
}

  // console.log(addElement(ingredients[0]));
const elements = ingredients.map(addElement);


//  #2
// const ingredientsEl = document.querySelector('#ingredients');
// console.log(ingredientsEl);

// for (let i = 0; i < ingredients.length; i += 1) {
//     const newEl = document.createElement('li');
//     newEl.textContent = ingredients[i];
//     ingredientsEl.appendChild(newEl);
// }