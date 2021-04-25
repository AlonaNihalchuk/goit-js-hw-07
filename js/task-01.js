const amoutCategories = document.querySelectorAll('.item');

console.log(`в списке ${amoutCategories.length} категории`);

amoutCategories.forEach((item) => {
    console.log(`Категория: ${item.firstElementChild.textContent}
Количество элементов: ${item.lastElementChild.children.length}`);
});
