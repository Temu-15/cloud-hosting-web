"use strict";

let coll = document.getElementsByClassName("collapsible__header");
let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    let collapsible = this.parentElement;
    let content = this.nextElementSibling;
    collapsible.classList.toggle("collapsible__expanded");
  });
}
const navigation = document.querySelectorAll(".nav");
navigation.forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".nav").classList.toggle("nav__expanded");
  });
});
