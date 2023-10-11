"use strict";

const sub = document.getElementById("subscribe");
const startForm = document.querySelector(".start-form");
const thanksForm = document.querySelector(".thanks-message");
const disMiss = document.getElementById("dismiss");

sub.addEventListener("click", function () {
  thanksForm.classList.remove("hidden");
  startForm.style.display = "none";
});

disMiss.addEventListener("click", function () {
  thanksForm.classList.add("hidden");
  startForm.style.display = "flex";
});
