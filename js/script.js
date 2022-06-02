var input_field = Array.from(document.querySelectorAll("input")); // Fetching all inputs with tag name.

var count = 0;
function ndata(event) {
  event.preventDefault();
  var input_field = Array.from(document.querySelectorAll("input"));
  var form = document.querySelectorAll("form");
  var inputData = [];

  for (var i = input_field.length; i > count; i--) {
    if (input_field[i - 1].value == "") {
      count = count + 1;
    } else {
      count = 0;
    }
  }

  if (count != 0) alert("all fields required");
  if (count == 0) {
    // event.preventDefault();
    // alert("all fields entered");
    input_field.forEach((input) => {
      if (input.type === "button" || input.type === "submit") return;
      const { name, value } = input;
      if (input.value == "") count++;
      inputData.push({ name, value });
    });
    // console.log(inputData);
    localStorage.setItem("inputData", JSON.stringify({ ...inputData }));
    location.reload();
  }
  return true;
}

// Function that executes on click of first next button.
function next_step1() {
  document.getElementById("form-1").style.display = "none";
  document.getElementById("form-2").style.display = "block";
  document.getElementById("active2").style.color = "red";
}

// Function that executes on click of first previous button.
function prev_step1() {
  document.getElementById("form-1").style.display = "block";
  document.getElementById("form-2").style.display = "none";
  document.getElementById("active1").style.color = "red";
  document.getElementById("active2").style.color = "gray";
}

// Function that executes on click of second next button.
function next_step2() {
  document.getElementById("form-2").style.display = "none";
  document.getElementById("form-3").style.display = "block";
  document.getElementById("active3").style.color = "red";
}

// Function that executes on click of second previous button.
function prev_step2() {
  document.getElementById("form-3").style.display = "none";
  document.getElementById("form-2").style.display = "block";
  document.getElementById("active2").style.color = "red";
  document.getElementById("active3").style.color = "gray";
}

// const showError = (input) => {
//   // get the form-field element
//   const formField = input.parentElement;
//   // add the error class
//   console.log(input, formField);
//   // input.classList.remove("success");
//   input.classList.add("error");

//   // show the error message
//   const error = parent.querySelector("small");
//   error ? console.log(error) : "s";

//   error.innerText = input.name + " cannot be empty";
// };

// const showSuccess = (input) => {
//   // get the form-field element
//   const formField = input.parentElement;

//   // remove the error class
//   formField.classList.remove("error");
//   formField.classList.add("success");

//   // hide the error message
//   const error = formField.querySelector("small");
//   error.textContent = "";
// };
