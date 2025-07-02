let form = document.querySelector("form");
let btn = document.getElementById("submit");
let emailField = document.getElementById("email");
let errorMassege = document.querySelector(".msg-error");

btn.onmouseenter = function () {
  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailField.value === "" || !pattern.test(emailField.value)) {
    emailField.style.border = "1px solid red";
    errorMassege.style.display = "block";
  }
};


