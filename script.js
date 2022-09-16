const inputName = document.querySelector("#name");
const inputCardNumber = document.querySelector("#card-number");
const numbersCard = document.querySelector("#numbers-card");
const btnConfirmForm = document.querySelector("#confirm-form");
const expM = document.querySelector("#exp-mm");
const expY = document.querySelector("#exp-yy");
const cvc = document.querySelector("#cvc");

//EVITAR EVENTO DE SUBMIT PADRÃO DO FORM
btnConfirmForm.addEventListener("click", function (e) {
  e.preventDefault();
});

//FORMATAR O QUE FOR DIGITADO IGUAL CARTÃO
inputCardNumber.addEventListener("keypress", (e) => {
  const cardNumberLength = inputCardNumber.value.length;
  if (
    cardNumberLength === 4 ||
    cardNumberLength === 9 ||
    cardNumberLength === 14 ||
    cardNumberLength === 19
  ) {
    inputCardNumber.value += " ";
  }
});

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);

  const pattern = "[0-9]";
  if (char.match(pattern)) {
    return true;
  }
}

inputCardNumber.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
    document.querySelector("#error-number-card-blank").style.display = "none";
    document.querySelector("#error-number-card").style.display = "block";
  }
});

function validateForm(e) {
  if (inputCardNumber.value === "") {
    inputCardNumber.classList.add("input-error");
    document.querySelector("#error-number-card").style.display = "none";
    document.querySelector("#error-number-card-blank").style.display = "block";
  }
  if (expM.value === "" || expY.value === "") {
    document.querySelector("#error-date-card").style.display = "block";
    if (expM.value === "") {
      expM.classList.add("input-error");
    }
    if (expY.value === "") {
      expY.classList.add("input-error");
    }
  }
  if (cvc.value === "") {
    document.querySelector("#error-cvc-card").style.display = "block";
    cvc.classList.add("input-error");
  }
}
function getDataForm(e) {
  validateForm();
  if (
    inputCardNumber.value !== "" &&
    expM.value !== "" &&
    expY.value !== "" &&
    cvc.value !== ""
  ) {
    document.querySelector("#form").style.display = "none";
    document.querySelector("#passed-form").style.display = "block";

    console.log(
      inputCardNumber.value,
      inputName.value,
      expM.value,
      expY.value,
      cvc.value
    );

    document.querySelector("#name-card").innerHTML = inputName.value;
    document.querySelector("#numbers-card").innerHTML = inputCardNumber.value;
    document.querySelector("#mm-card").innerHTML = expM.value;
    document.querySelector("#yy-card").innerHTML = expY.value;
    document.querySelector("#cvc-card").innerHTML = cvc.value;
  }
}

btnConfirmForm.addEventListener("click", getDataForm);
