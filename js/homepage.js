const header = document.querySelector(".header-container");
// const headerlogo = document.querySelector(".header-logo");
window.addEventListener("scroll", function () {
  if (scrollY >= 400) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
  console.log(scrollY);
});

const pdpMainImage = document.querySelector(".main-img img");
const pdpSubImage = document.querySelectorAll(".gallery-img img");
console.log(pdpSubImage.length);

pdpSubImage.forEach((image) => {
  image.addEventListener("click", function (e) {
    e.preventDefault();
    pdpMainImage.src = image.src;
  });
});
