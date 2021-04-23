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
for (let i = 0; i < ingredients.length; i += 1) {
    const newEl = document.createElement('li');
    newEl.textContent = ingredients[i];
    ingredientsEl.appendChild(newEl);
}

// const newEl = document.createElement('li');
// ingredients.forEach((ingredient) => newEl.textContent = ingredient);
// ingredientsEl.append(newEl);

// const addElement = (ingredientsEl) {
//     const newEl = document.createElement('li');
//     newEl.textContent = 'Алена молодец';
//     ingredientsEl.append(newEl);
// }

// console.log(addElement);
// const eachIngredient = ingredients.forEach(ingredient =>
//     console.log(ingredient));

//  const newEl = document.createElement('li');   

// const addElement = (newEl, eachIngredient) => {
//     newEl.textContent = ingredient;
    

// }
// ingredientsEl.append(newEl);
// for (let i = 0; i < ingredientsEl.length; i += 1) {
//     const newEl = document.createElement('li');
//     newEl.textContent = 'Картошка';
//     ingredientsEl.appendChild(newEl);

// }


// const firstItemIngredientsEl = document.createElement('li');
// firstItemIngredientsEl.textContent = 'Картошка';

// const secondItemIngredientsEl = document.createElement('li');
// firstItemIngredientsEl.textContent = 'Грибы';

// const thirdItemIngredientsEl = document.createElement('li');
// firstItemIngredientsEl.textContent = 'Чеснок';

// const forthItemIngredientsEl = document.createElement('li');
// firstItemIngredientsEl.textContent = 'Помидоры';

// const fifthItemIngredientsEl = document.createElement('li');
// firstItemIngredientsEl.textContent = 'Зелень';


// const newEl = document.createElement('li');

// ulEl.append(firstItemIngredientsEl, secondItemIngredientsEl, thirdItemIngredientsEl, forthItemIngredientsEl, fifthItemIngredientsEl);
// console.log(ulEl);

// ???????????
// const newEl = ingredients.forEach((ingredient) =>  document.createElement('li').textContent = ingredient);
// ingredientsEl.append(newEl);