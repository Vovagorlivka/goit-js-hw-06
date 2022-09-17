const CategoriesRef = document.querySelectorAll(".item");

console.log("Number of categories:", CategoriesRef.length);

CategoriesRef.forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});