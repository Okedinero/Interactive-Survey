const rateStatus = document.querySelector(".rating-status");
const thankYou = document.querySelector(".thank-you");
const form = document.querySelector(".rating-form");
// const errorMsg = document.getElementById("#error-msg"); //

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const selector = "input[name=ratings]:checked";
  const checkedInput = document.querySelector(selector);

  if (checkedInput !== null) {
    const selectedRating = document.querySelector(".selection");
    selectedRating.textContent =
      "You selected " + checkedInput.getAttribute("value") + " out of 5";
    // errorMsg.style.display = "none"; //
    rateStatus.classList.add("hidden");
    thankYou.classList.remove("hidden");
  } //else {
  //   errorMsg.style.display = "block"; //
  // }
});
