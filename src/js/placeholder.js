const inputField = document.querySelector(".header__search__container__input");
const placeholderText = inputField.getAttribute("placeholder");

let i = 7;
let reverse = false;

function updatePlaceholder() {
  const prefix = placeholderText.substring(0, 7);
  const suffix = placeholderText.substring(7, i + 1);
  const newText = prefix + suffix;
  inputField.setAttribute("placeholder", newText);

  reverse
    ? i === 7
      ? (reverse = false)
      : i--
    : i === placeholderText.length - 1
      ? (reverse = true)
      : i++;
}

inputField.setAttribute("placeholder", "");

setTimeout(() => {
  setInterval(updatePlaceholder, 100);
}, 100);
