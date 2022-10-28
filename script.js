const button = document.querySelector(".search__btn");

const search = document.querySelector(".search");

button.addEventListener("click", () => {
  search.classList.add("active");
});
