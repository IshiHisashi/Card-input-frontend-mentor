"use strict";

// set variables
const form = document.querySelector("form");
const confirmation = document.querySelector(".confirmation");
const cardholder = document.getElementById("cardholder");
const cardNum = document.getElementById("cardnum");
const inputMonth = document.getElementById("inputmonth");
const inputYear = document.getElementById("inputyear");
const inputCvc = document.getElementById("inputcvc");
const btnConfirm = document.getElementById("btn-confirm");
const btnContinue = document.getElementById("btn-continue");

const validBlank = function (val) {
  return val.trim().length;
};

btnConfirm.addEventListener("click", function (e) {
  e.preventDefault(e);
  if (
    validBlank(cardholder.value) &&
    validBlank(cardNum.value) &&
    validBlank(inputMonth.value) &&
    validBlank(inputYear.value) &&
    validBlank(inputCvc.value)
  ) {
    console.log("all are now filled in");
    form.classList.add("hidden");
    e.target.classList.add("hidden");
    confirmation.classList.remove("hidden");
  } else {
    if (!validBlank(cardholder.value)) {
      cardholder.style.border = "1px solid red";
      document.querySelector(".ch-error").textContent = "cannot be blank";
    }
    if (!validBlank(cardNum.value)) {
      cardNum.style.border = "1px solid red";
      document.querySelector(".cn-error").textContent = "cannot be blank";
    }
    if (!validBlank(inputMonth.value)) {
      inputMonth.style.border = "1px solid red";
      document.querySelector(".cmy-error").textContent = "cannot be blank";
    }
    if (!validBlank(inputYear.value)) {
      inputYear.style.border = "1px solid red";
      document.querySelector(".cmy-error").textContent = "cannot be blank";
    }
    if (!validBlank(inputCvc.value)) {
      inputCvc.style.border = "1px solid red";
      document.querySelector(".cc-error").textContent = "cannot be blank";
    }
  }
});
