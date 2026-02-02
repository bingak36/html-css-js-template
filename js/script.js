const body = document.querySelector("body");
const header = document.querySelector("header");
const fixedArrow = document.querySelector(".arrow");
const mobNavBtn = document.querySelector(".menu-btn");
const navList = document.querySelector("header ul");
const navBtns = document.querySelectorAll("header ul li");

navBtns.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(`#sec-${i + 1}`);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

mobNavBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navList.classList.toggle("on");
});

window.addEventListener("scroll", () => {
 if (window.scrollY >= 100) {
  body.classList.add("scroll");
 } else {
  body.classList.remove("scroll");
 }
});

fixedArrow.addEventListener("click", () => {
 window.scrollTo({
  top: 0,
  behavior: "smooth",
 });
});


const sec5MenuList = document.querySelectorAll(".sec-5-menu li");
const sec5ContentList = document.querySelectorAll(".sec-5-wrap .content");
let crr = 0;



init(crr);

function init(x) {
 sec5MenuList[x].classList.add("active");
 sec5ContentList[x].classList.add("on");
}

function reset() {
 for (let i = 0; i < sec5MenuList.length; i++) {
  sec5MenuList[i].classList.remove("active");
  sec5ContentList[i].classList.remove("on");
 }
}


sec5MenuList.forEach((menu, index) => {
 menu.addEventListener("click", (e) => {
    e.preventDefault()

  reset();
  init(index);
 });
});


var swiper = new Swiper(".sec-3-container", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});