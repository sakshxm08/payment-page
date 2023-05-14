// document
//   .getElementById("name")
//   .addEventListener(
//     "input",
//     (e) => (document.getElementById("holderName").innerText = e.target.value)
//   );
const updateValue = (formId, cardId) => {
  document
    .getElementById(formId)
    .addEventListener(
      "input",
      (e) => (document.getElementById(cardId).innerText = e.target.value)
    );
};
updateValue("name", "holderName");
updateValue("number1", "cardNumber1");
updateValue("number2", "cardNumber2");
updateValue("number3", "cardNumber3");
updateValue("number4", "cardNumber4");
// updateValue("card-expiration-month", "month");
updateValue("cvv", "cardCvv");
document.getElementById("cvv").addEventListener("focusin", () => {
  document.getElementById("card-flip").classList.add("flip");
});
document.getElementById("cvv").addEventListener("focusout", () => {
  document.getElementById("card-flip").classList.remove("flip");
});
document.getElementById("cvv").addEventListener("input", (e) => {
  if (e.target.value.length > 3) document.getElementById("cvv").blur();
});

document.getElementById(`number1`).addEventListener("input", (e) => {
  if (e.target.value.length > 3) {
    document.getElementById(`number1`).blur();
    document.getElementById(`number2`).focus();
  }
});
document.getElementById(`number2`).addEventListener("input", (e) => {
  if (e.target.value.length > 3) {
    document.getElementById(`number2`).blur();
    document.getElementById(`number3`).focus();
  }
});
document.getElementById(`number3`).addEventListener("input", (e) => {
  if (e.target.value.length > 3) {
    document.getElementById(`number3`).blur();
    document.getElementById(`number4`).focus();
  }
});

document.getElementById(`number4`).addEventListener("input", (e) => {
  if (e.target.value.length > 3) {
    document.getElementById(`number4`).blur();
    document.getElementById("name").focus();
  }
});
document
  .getElementById("card-expiration-month")
  .addEventListener(
    "input",
    (e) => (document.getElementById("month").innerText = e.target.value + "/")
  );
document
  .getElementById("card-expiration-year")
  .addEventListener(
    "input",
    (e) =>
      (document.getElementById("year").innerText = e.target.value.slice(2, 4))
  );
// document.getElementById("promoCheck").addEventListener("input", () => {
//   document.getElementById("promoInput").classList.toggle("hide");
//   document.getElementById("promo").toggleAttribute("required");
// });
document.getElementById("submit").addEventListener("click", () => {
  alert(
    "This payment gateway is for demo purposes only. No data is stored. The payment form will now be reset."
  );
  () => document.getElementsByTagName("form").reset();
});
