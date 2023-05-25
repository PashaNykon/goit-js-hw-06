const categoriesEl = document.querySelector('#categories');
const childrenCountEl = categoriesEl.children.length;
console.log('Number of categories:', childrenCountEl);

const childrenEl = document.querySelectorAll('.item');
childrenEl.forEach(child => {
    console.log('Category:', child.firstElementChild.textContent);
    console.log('Elements:', child.lastElementChild.children.length);
})

