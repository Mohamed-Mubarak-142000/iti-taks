var username = document.getElementById("name");
var email = document.getElementById("email");
var form = document.forms[0];
var nameMessage = document.getElementById("nameMessage");
var emailMessage = document.getElementById("emailMessage");
var selectCountry = document.getElementById("selectCountry");
var zipCode = document.getElementById("zipCode");
var zipMessage = document.getElementById("zipMessage");
var checkeboxes = document.querySelectorAll("input[type='checkbox']");
var checkedMessage = document.getElementById("checkedMessage");
var arrayCheked = [];
console.log("object6555", checkeboxes);
//Function validation name
function userNameIsValidation(name) {
  return name.match(/([a-z]|[A-Z]){5,10}/);
}

//FUNCTION VALIDATION EMAIL
function userEmailValidation(email) {
  return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
}

// Function to handle username validation
function validateUsername() {
  var isUsernameValid = userNameIsValidation(username.value);
  if (!isUsernameValid) {
    email.classList.add("invalid");
    nameMessage.innerText = "Please enter a valid name.";
    nameMessage.style.color = "red";
  } else {
    email.classList.add("success");
    nameMessage.innerText = "name is valid";
    nameMessage.style.color = "green";
  }

  return isUsernameValid;
}

// Function to handle email validation
function validateEmail() {
  // Validate email
  var isEmailValid = userEmailValidation(email.value);
  if (!isEmailValid) {
    email.classList.add("invalid");
    emailMessage.innerText = "Please enter a valid email address.";
    emailMessage.style.color = "red";
  } else {
    email.classList.add("success");
    emailMessage.innerText = "Email is valid";
    emailMessage.style.color = "green";
  }

  return isEmailValid;
}

// zipCode.value = selectCountry.value;

function changeCountry() {
  zipCode.value = selectCountry.value;
  if (zipCode) {
    zipCode.value = zipCode.value;
    zipMessage.innerText = "zip code is valid";
    zipMessage.style.color = "green";
  } else {
    zipMessage.innerText = "Please enter a valid zipMessage address.";
    zipMessage.style.color = "red";
  }
  return zipCode;
}

// Function to validate checkboxes
function validateCheckboxes() {
  var isChecked = false;
  for (var i = 0; i < checkeboxes.length; i++) {
    if (checkeboxes[i].checked) {
      isChecked = true;
      break;
    }
  }

  if (isChecked) {
    checkedMessage.innerText = "Hobby selected.";
    checkedMessage.style.color = "green";
  } else {
    checkedMessage.innerText = "Please select at least one hobby.";
    checkedMessage.style.color = "red";
  }

  return isChecked;
}

// Function to handle selected values of checkboxes (optional)
function selectedValues(ele) {
  var arr = [];
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      arr.push(ele[i].value);
    }
  }

  if (arr.length > 0) {
    checkedMessage.innerText = "Your choice of hobby";
    checkedMessage.style.color = "green";
  } else {
    checkedMessage.innerText = "Please choose a hobby.";
    checkedMessage.style.color = "red";
  }
  console.log(arr);
  return arr;
}

function Clear(e) {
  var ans = confirm("Are You Sure!");
  if (ans) {
    var textInputs = document.querySelectorAll('input[type="text"]');
    textInputs.forEach(function (input) {
      input.value = "";
    });
  } else {
    e.preventDefault(); // Prevent the default action only if the user cancels
  }
}

// Add event listener to the element with id 'clear'
document.getElementById("reset").addEventListener("click", Clear);

// Add event listeners to the username and email inputs
selectCountry.addEventListener("blur", changeCountry);
username.addEventListener("blur", validateUsername);
email.addEventListener("blur", validateEmail);

form.addEventListener("submit", function (event) {
  var isUsernameValid = validateUsername();
  var isEmailValid = validateEmail();
  var isCheckboxesValid = validateCheckboxes();

  if (isUsernameValid && isEmailValid && isCheckboxesValid) {
    form.submit();
    email.value = "";
    username.value = "";
    zipCode.value = "";
  } else {
    event.preventDefault();
  }
});
