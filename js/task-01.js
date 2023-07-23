const list = document.querySelector('#categories');
console.log(`Numbers of categories: ${list.children.length}`);

const items = document.querySelectorAll('.item');
items.forEach(item => console.log(`Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`));