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

//phone input
phoneInput.addEventListener("input", function (e) {
  let input = e.target.value.replace(/\D/g, "");

  if (input.length > 10) {
    input = input.slice(0, 10);
  }

  phoneInput.value = input;

  phoneErrorMsg.style.visibility = "hidden";
});

phoneInput.addEventListener("blur", function () {
  if (phoneInput.value.length > 0 && phoneInput.value.length !== 10) {
    phoneErrorMsg.style.visibility = "visible";
  } else {
    phoneErrorMsg.style.visibility = "hidden";
  }
});

form.addEventListener("submit", function (e) {
  if (phoneInput.value.length !== 10) {
    e.preventDefault();
    phoneErrorMsg.style.visibility = "visible";
  }
});

//zipcode inout
zipInput.addEventListener("input", function (e) {
  let input = e.target.value.replace(/\D/g, "");
  if (input.length > 5) {
    input = input.slice(0, 5);
  }
  zipInput.value = input;
  idErrorMsg.style.visibility = "hidden";
});

zipInput.addEventListener("blur", function () {
  if (zipInput.value.length > 0 && zipInput.value.length !== 5) {
    zipErrorMsg.style.visibility = "visible";
  } else {
    zipErrorMsg.style.visibility = "hidden";
  }
});
form.addEventListener("submit", function (e) {
  if (zipInput.value.length !== 5) {
    e.preventDefault();
    zipErrorMsg.style.visibility = "visible";
  }
});

//id input
idInput.addEventListener("input", function (e) {
  let input = e.target.value.replace(/\D/g, "");
  if (input.length > 12) {
    input = input.slice(0, 12);
  }
  idInput.value = input;
  idErrorMsg.style.visibility = "hidden";
});

idInput.addEventListener("blur", function () {
  if (idInput.value.length > 0 && idInput.value.length !== 12) {
    idErrorMsg.style.visibility = "visible";
  } else {
    idErrorMsg.style.visibility = "hidden";
  }
});
form.addEventListener("submit", function (e) {
  if (idInput.value.length !== 12) {
    e.preventDefault();
    idErrorMsg.style.visibility = "visible";
  }
});

//succes message pop up

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!robotInput.checked) {
    robotError.style.visibility = "visible";
  } else {
    robotError.style.visibility = "hidden";
  }
  const application = {
    name: document.getElementById("firstname").value,
    username: document.getElementById("lastname").value,
    id: document.getElementById("id-card").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    zipcode: document.getElementById("zip-code").value,
  };

  console.log("Send this to hr department:", application);

  //successMessage.style.display = "block";

  form.reset();
});
