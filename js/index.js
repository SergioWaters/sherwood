//dropdown clickhandler
function dropdownClickHandler(e) {
  const t = e.target;
  const parent = t.parentNode;
  if (t.className === "dropdown-selected") {
    const icon = document.createElement("i");
    parent.querySelector("ul").classList.toggle("hidden");
    parent.querySelectorAll("li").forEach((item) => {
      item.querySelector("i")?.remove();

      if (item.textContent === t.textContent) {
        item.appendChild(icon);
      }
    });
  }
  if (t.className === "dropdown-list-item") {
    parent.classList.add("hidden");
    const selected = parent.parentNode.querySelector(".dropdown-selected");
    selected.textContent = t.textContent;
  }
}

//burger
const burger = document.querySelector(".burgerbtn");
burger.addEventListener("click", burgerClickHandler);

function burgerClickHandler() {
  const nav = document.querySelector(".nav_menu");
  burger.querySelector(".bars").classList.toggle("open");
  nav.classList.toggle("open");
  if (burger.classList.contains("open")) {
    nav
      .querySelectorAll(".nav_menu-item")
      .forEach((i) => i.addEventListener("click", dropdownClickHandler));
  }
}

// navbar on blur
const nav = document.querySelector(".nav_menu");
nav.addEventListener("blur");

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  const navIcon = document.querySelector(".logo");
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navIcon.style.height = "100px";
  } else {
    navIcon.style.height = "40px";
  }
  prevScrollpos = currentScrollPos;
};

/**
 * @TODO: async load for imgs on window.onload
 * remove href from images of slider
 * then onload callback async fetch for the images
 * then add attr src to images
 * then get full resolution images
 */
