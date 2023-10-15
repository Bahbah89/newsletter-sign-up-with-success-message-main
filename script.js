"use strict";

const sub = document.getElementById("subscribe");
const startForm = document.querySelector(".start-form");
const thanksForm = document.querySelector(".thanks-message");
const disMiss = document.getElementById("dismiss");
let userEmail = document.getElementById("user-email");
let emailField = document.getElementById("email-field");
const valid = document.querySelector(".valid");

sub.addEventListener("click", function () {
  if (!document.getElementById("email-field").checkValidity()) {
    valid.classList.remove("hidden");
    emailField.style.backgroundColor = "hsl(4, 60%, 67%)";
  } else {
    thanksForm.classList.remove("hidden");
    startForm.style.display = "none";
    console.log(userEmail, emailField);
    userEmail.textContent = emailField.value;
  }
});

disMiss.addEventListener("click", function () {
  thanksForm.classList.add("hidden");
  startForm.style.display = "flex";
});
