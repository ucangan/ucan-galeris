// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika gift di click
document.querySelector("#gift").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diliar sidebar untuk mengilangkan nav
const gift = document.querySelector("gift");

document.addEventListener("click", function (e) {
  if (!gift.contains(e.target) && navbarNav.contauns(e.target)) {
    navbarNav.classList.remove("active");
  }
});
