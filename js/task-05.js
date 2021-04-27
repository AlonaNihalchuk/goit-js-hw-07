const nameInputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");
console.log(nameOutputRef);

nameInputRef.addEventListener("input", onNameInput);

function onNameInput(event) {
  if (event.currentTarget.value === "") {
    nameOutputRef.textContent = "незнакомец";
    console.log(event.currentTarget.value);
    return;
  }

  nameOutputRef.textContent = event.currentTarget.value;
}
