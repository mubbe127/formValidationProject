import "./style.css";
import "./person-name-svgrepo-com.svg";
import "./email-1-svgrepo-com.svg";
import "./password-svgrepo-com.svg";
import "./password-lock-svgrepo-com.svg";
import {requiredField, firstnameCheck, lastnameCheck, emailCheck, passwordCheck,passwordRepeatCheck} from './module.js'



const inputFirstname = document.querySelector("#user-firstname");
const inputLastname = document.querySelector("#user-lastname");
const inputEmail = document.querySelector("#user-email");
const inputDate = document.querySelector("#user-birthdate");
const inputPassword = document.querySelector("#user-password");
const inputPasswordRepeat = document.querySelector("#user-password-repeat");
const formElement = document.querySelector(".formElement");

/*style*/

const arrayInputElements = [
  inputFirstname,
  inputLastname,
  inputEmail,
  inputDate,
  inputPassword,
  inputPasswordRepeat,
];

arrayInputElements.forEach((element) => {
  if (element === inputFirstname || element === inputLastname) {
    element.addEventListener("focus", function () {
      element.parentElement.parentElement.classList.add("visible");
      element.parentElement.classList.add("focused");
    });
    element.addEventListener("blur", function () {
      if (
        (document.activeElement !== inputFirstname ||
          document.activeElement !== inputLastname) &&
        !inputFirstname.value &&
        !inputLastname.value
      ) {
        element.parentElement.parentElement.classList.remove("visible");
        element.parentElement.classList.remove("focused");
      }
      if (element === inputLastname) {
        document.querySelector("#theicon").classList.remove("focusedicon");
      }
    });
  } else {
    element.addEventListener("focus", function () {
      element.parentElement.parentElement.classList.add("visible");
      element.parentElement.classList.add("focused");
    });

    element.addEventListener("blur", function () {
      if (!element.value) {
        element.parentElement.parentElement.classList.remove("visible");
        element.parentElement.classList.remove("focused");
      }
    });
  }
});

arrayInputElements.forEach((element) => {
  element.addEventListener("input", function () {
    const errorElement = document.querySelectorAll(".error");
    console.log("ARRAYINPUT");
    element.setCustomValidity("");
    if (!element.validity.valid) {
      element.parentElement.parentElement.classList.add("erroractive");
      console.log("jala jiep");
      if (element.validity.valueMissing) {
        errorElement.forEach((error) => {
          if (error.parentElement === element.parentElement) {
            error.textContent = "This is required.";
          }
        });
      }
    } else {
      element.parentElement.parentElement.classList.remove("erroractive");
      errorElement.forEach((error) => {
        if (error.parentElement === element.parentElement) {
          element.setCustomValidity("");
          error.textContent = element.validationMessage;
        }
      });
    }
  });
});

inputFirstname.addEventListener("input", function () {
firstnameCheck()
});

inputLastname.addEventListener("input", function () {
lastnameCheck()
});

inputEmail.addEventListener("input", function () {
emailCheck()
});

inputPassword.addEventListener("input", function () {
  passwordCheck()
});

inputPasswordRepeat.addEventListener("input", function () {
 passwordRepeatCheck()
});

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  requiredField();
  firstnameCheck();
  lastnameCheck();
  emailCheck();
  passwordCheck();
  passwordRepeatCheck();
});
