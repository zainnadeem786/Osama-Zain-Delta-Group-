const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

inputs.forEach((currentInput, index) => {
  currentInput.addEventListener("keyup", (event) => {
    const nextInput = currentInput.nextElementSibling;
    const prevInput = currentInput.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value!== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }
  });
});