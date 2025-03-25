// 1 zadanie
const categories = document.querySelectorAll("ul#categories .item");
console.log("кількість категорій:", categories.length);
// 2 zadanie
categories.forEach(category => {
const title = category.querySelector("h2").textContent;
const ul_li = category.querySelectorAll("ul li").length;
console.log(`категория ${title}`);
console.log(`килькисть элементив: ${ul_li}`);
});