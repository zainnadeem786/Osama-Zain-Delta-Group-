const inputs = document.querySelectorAll("input"),
      button = document.querySelector("button");

// iterate over all inputs
inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    // This code gets the current input element and stores it in the currentInput variable
    // This code gets the next sibling element of the current input element and stores it in the nextInput variable
    // This code gets the previous sibling element of the current input element and stores it in the prevInput variable
    const currentInput = input,
          nextInput = input.nextElementSibling,
          prevInput = input.previousElementSibling;

    // if the value has more than one character then clear it
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    // if the next input is disabled and the current value is not empty
    //  enable the next input and focus it
    if (nextInput && currentInput.value !== "" && nextInput.disabled) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // if the current input is empty and the previous input is not empty
    //  disable the previous input
    if (prevInput && currentInput.value === "" && !prevInput.disabled) {
      prevInput.setAttribute("disabled", "true");
    }

    // if the current input is the last input and the value is not empty
    //  submit the form
    if (nextInput === null && currentInput.value !== "") {
      button.click();
    }
  });
});