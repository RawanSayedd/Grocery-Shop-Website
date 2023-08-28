const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menuList = document.querySelector(".menu-list");
const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector(".search-form");
const cartBtn = document.querySelector(".cart-btn");
const cartForm = document.querySelector(".cart-items-container");
const signBtn = document.querySelector(".sign-btn");
const signForm = document.querySelector(".sign-in-container");

menuBtn.onclick = () => {
  menuList.classList.add("active");
  menuBtn.classList.add("hide");
};

cancelBtn.onclick = () => {
  menuList.classList.remove("active");
  menuBtn.classList.remove("hide");
};
searchBtn.onclick = () => {
  searchForm.classList.toggle("active");
  cartForm.classList.remove("active");
  signForm.classList.remove("active");
};
cartBtn.onclick = () => {
  cartForm.classList.toggle("active");
  searchForm.classList.remove("active");
  signForm.classList.remove("active");
};
signBtn.onclick = () => {
  signForm.classList.toggle("active");
  searchForm.classList.remove("active");
  cartForm.classList.remove("active");
};
///////
