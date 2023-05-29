const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const itemEl = document.createElement('li');
itemEl.classList.add('item');

const ingredientsItems = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');

  return ingredientItem;
})

  ingredientsEl.append(...ingredientsItems);