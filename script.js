const button = document.querySelector(".search__btn");

const search = document.querySelector(".search");

button.addEventListener("click", () => {
  if (!search.className.includes("active")) {
    search.classList.add("active");
  } else {
    search.classList.remove("active");
  }
});
