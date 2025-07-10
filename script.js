const phoneInput = document.getElementById("phone");
const zipInput = document.getElementById("zip-code");
const idInput = document.getElementById("id-card");
const phoneErrorMsg = document.getElementById("phoneError");
const idErrorMsg = document.getElementById("idError");
const zipErrorMsg = document.getElementById("zipError");
const robotInput = document.getElementById("robot-check");
const robotError = document.getElementById("robotError");
const form = document.getElementById("form-header");
const successMessage = document.getElementById("success-message");

//phone input and validation
function validatePhone() {
  let input = phoneInput.value.replace(/\D/g, "");
  phoneInput.value = input;

  if (input.length !== 10) {
    phoneErrorMsg.style.visibility = "visible";
  } else {
    phoneErrorMsg.style.visibility = "hidden";
  }
}

phoneInput.addEventListener("input", function () {
  let cleaned = phoneInput.value.replace(/\D/g, "");
  if (cleaned.length > 10) {
    cleaned = cleaned.slice(0, 10);
  }
  phoneInput.value = cleaned;
  phoneErrorMsg.style.visibility = "hidden";
});

phoneInput.addEventListener("blur", validatePhone);

//id input and validation
function validateId() {
  let input = idInput.value.replace(/\D/g, "");
  idInput.value = input;

  if (input.length !== 12) {
    idErrorMsg.style.visibility = "visible";
  } else {
    idErrorMsg.style.visibility = "hidden";
  }
}

idInput.addEventListener("input", function () {
  let cleaned = idInput.value.replace(/\D/g, "");
  if (cleaned.length > 12) {
    cleaned = cleaned.slice(0, 12);
  }
  idInput.value = cleaned;
  idErrorMsg.style.visibility = "hidden";
});

idInput.addEventListener("blur", validateId);

//zip input and validation
function validateZip() {
  let input = zipInput.value.replace(/\D/g, "");
  zipInput.value = input;

  if (input.length !== 5) {
    zipErrorMsg.style.visibility = "visible";
  } else {
    zipErrorMsg.style.visibility = "hidden";
  }
}

zipInput.addEventListener("input", function () {
  let cleaned = zipInput.value.replace(/\D/g, "");
  if (cleaned.length > 5) {
    cleaned = cleaned.slice(0, 5);
  }
  zipInput.value = cleaned;
  zipErrorMsg.style.visibility = "hidden";
});

zipInput.addEventListener("blur", validateZip);

//calling the submit button for pop up message and error handling
form.addEventListener("submit", function (e) {
  e.preventDefault();

  validatePhone();
  validateId();
  validateZip();

  const hasPhoneError = phoneErrorMsg.style.visibility === "visible";
  const hasIdError = idErrorMsg.style.visibility === "visible";
  const hasZipError = zipErrorMsg.style.visibility === "visible";

  if (!robotInput.checked) {
    robotError.style.visibility = "visible";
  } else {
    robotError.style.visibility = "hidden";
  }

  if (!hasPhoneError && !hasIdError && !hasZipError && robotInput.checked) {
    successMessage.style.display = "block";
    const application = {
      name: document.getElementById("firstname").value,
      username: document.getElementById("lastname").value,
      id: document.getElementById("id-card").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      zipcode: document.getElementById("zip-code").value,
    };
    console.log("Send this to hr department:", application);
    form.reset();
  } else {
    successMessage.style.display = "none";
  }
});

//OLD CODE BEFORE REFACTORING(just for referance)

//phone input
// phoneInput.addEventListener("input", function (e) {
//   let input = e.target.value.replace(/\D/g, "");

//   if (input.length > 10) {
//     input = input.slice(0, 10);
//   }

//   phoneInput.value = input;

//   phoneErrorMsg.style.visibility = "hidden";
// });

// phoneInput.addEventListener("blur", function () {
//   if (phoneInput.value.length > 0 && phoneInput.value.length !== 10) {
//     phoneErrorMsg.style.visibility = "visible";
//   } else {
//     phoneErrorMsg.style.visibility = "hidden";
//   }
// });

// form.addEventListener("submit", function (e) {
//   if (phoneInput.value.length !== 10) {
//     e.preventDefault();
//     phoneErrorMsg.style.visibility = "visible";
//   }
// });

//zipcode input
// zipInput.addEventListener("input", function (e) {
//   let input = e.target.value.replace(/\D/g, "");
//   if (input.length > 5) {
//     input = input.slice(0, 5);
//   }
//   zipInput.value = input;
//   idErrorMsg.style.visibility = "hidden";
// });

// zipInput.addEventListener("blur", function () {
//   if (zipInput.value.length > 0 && zipInput.value.length !== 5) {
//     zipErrorMsg.style.visibility = "visible";
//   } else {
//     zipErrorMsg.style.visibility = "hidden";
//   }
// });
// form.addEventListener("submit", function (e) {
//   if (zipInput.value.length !== 5) {
//     e.preventDefault();
//     zipErrorMsg.style.visibility = "visible";
//   }
// });

// //id input
// idInput.addEventListener("input", function (e) {
//   let input = e.target.value.replace(/\D/g, "");
//   if (input.length > 12) {
//     input = input.slice(0, 12);
//   }
//   idInput.value = input;
//   idErrorMsg.style.visibility = "hidden";
// });

// idInput.addEventListener("blur", function () {
//   if (idInput.value.length > 0 && idInput.value.length !== 12) {
//     idErrorMsg.style.visibility = "visible";
//   } else {
//     idErrorMsg.style.visibility = "hidden";
//   }
// });
// form.addEventListener("submit", function (e) {
//   if (idInput.value.length !== 12) {
//     e.preventDefault();
//     idErrorMsg.style.visibility = "visible";
//   }
// });

//succes message pop up
