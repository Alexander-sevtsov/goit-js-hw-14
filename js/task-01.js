
  const list = document.querySelector("#categories");
const categories = [...list.children];
console.log(categories);
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("li");
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems.length}`);
});
