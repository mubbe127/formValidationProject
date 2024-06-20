export {requiredField, firstnameCheck, lastnameCheck, emailCheck, passwordCheck,passwordRepeatCheck}
const inputFirstname = document.querySelector("#user-firstname");
const inputLastname = document.querySelector("#user-lastname");
const inputEmail = document.querySelector("#user-email");
const inputDate = document.querySelector("#user-birthdate");
const inputPassword = document.querySelector("#user-password");
const inputPasswordRepeat = document.querySelector("#user-password-repeat");


/*style*/

const arrayInputElements = [
  inputFirstname,
  inputLastname,
  inputEmail,
  inputDate,
  inputPassword,
  inputPasswordRepeat,
];


function requiredField () {
  arrayInputElements.forEach((element) => {
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
}
function firstnameCheck() {
  if (!inputFirstname.validity.valid) {
    if (inputFirstname.validity.patternMismatch) {
      const error = document.querySelector(".firstname .error");
      error.textContent = "Only letters is allowed.";
    }

    if (inputFirstname.validity.tooShort) {
      const error = document.querySelector(".firstname .error");
      error.textContent = "Name is too short.";
    }
  }
}

function lastnameCheck() {
  if (!inputLastname.validity.valid) {
    if (inputLastname.validity.patternMismatch) {
      const errorel = document.querySelector(".lastname .error");
      errorel.textContent = "Only letters is allowed.";
    }

    if (inputLastname.validity.tooShort) {
      const errorel = document.querySelector(".lastname .error");
      errorel.textContent = "Name is too short.";
    }
  }
}
function emailCheck() {
  const erroremail = document.querySelector(".email .error");

  if (!inputEmail.validity.valid) {
    if (inputEmail.validity.tooShort) {
      inputEmail.setCustomValidity(
        "Email is too short, please use a longer one.",
      );
      erroremail.textContent = inputEmail.validationMessage;
    } else if (inputEmail.validity.typeMismatch) {
      inputEmail.setCustomValidity(
        "You can only use letters, numbers, periods (‘.’), and underscores (‘_’) in your username.",
      );
      erroremail.textContent = inputEmail.validationMessage;
    }
  } else {
    inputEmail.setCustomValidity("");
    erroremail.textContent = inputEmail.validationMessage;
  }
}

function passwordCheck() {
  const passwordError = document.querySelector(".password .error");

  if (!inputPassword.validity.valid) {
    if (inputPassword.validity.tooShort) {
      inputPassword.setCustomValidity(
        `Password must be at least ${inputPassword.minLength} characters; you entered ${inputPassword.value.length}.`,
      );
      passwordError.textContent = inputPassword.validationMessage;
    } else if (inputPassword.validity.patternMismatch) {
      inputPassword.setCustomValidity(
        "Password must include at least one uppercase letter, one lowercase letter, and one number.",
      );
      passwordError.textContent = inputPassword.validationMessage;
    } else if (inputPassword.validity.tooLong) {
      inputPassword.setCustomValidity(
        `Password must be no more than ${inputPassword.maxLength} characters; you entered ${inputPassword.value.length}.`,
      );
      passwordError.textContent = inputPassword.validationMessage;
    }
  } else if (
    inputPassword.value.length !== 0 &&
    inputPasswordRepeat.value.length !== 0 &&
    inputPassword.value !== inputPasswordRepeat.value
  ) {
    inputPassword.setCustomValidity("Password does not match.");
    passwordError.textContent = inputPassword.validationMessage;
  } else {
    inputPassword.setCustomValidity("");
    console.log("jaaaaaaalll");
    passwordError.textContent = inputPassword.validationMessage;
    const passwordRepeatError = document.querySelector(
      ".password.repeat .error",
    );
    if (inputPasswordRepeat.value.length !== 0) {
      passwordRepeatError.textContent = "";
    }
  }
}

function passwordRepeatCheck() {
  const passwordRepeatError = document.querySelector(".password.repeat .error");
  inputPasswordRepeat.setCustomValidity(""); // Clear any previous custom validity

  if (inputPasswordRepeat.value.length === 0) {
    passwordRepeatError.textContent = "This is required.";
  } else if (inputPasswordRepeat.value !== inputPassword.value) {
    inputPasswordRepeat.setCustomValidity("Passwords do not match.");
    passwordRepeatError.textContent = inputPasswordRepeat.validationMessage;
  } else {
    passwordRepeatError.textContent = inputPasswordRepeat.validationMessage;
    inputPassword.setCustomValidity("");
    const passwordError = document.querySelector(".password .error");
    passwordError.textContent = inputPassword.validationMessage;
  }
}
