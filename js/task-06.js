const myInput = document.querySelector("#validation-input");
myInput.addEventListener("blur", onBlur);
function onBlur(e) {
  const input1 = e.currentTarget;
  const inputLength = Number(input1.dataset.length);
  if (input1.value.length === inputLength) {
    updateClassElem("valid", "invalid");
  } else {
    updateClassElem("invalid", "valid");
  }
 }
function updateClassElem(addCl, remCl) {
  myInput.classList.remove(remCl)
  myInput.classList.add(addCl)
}
 //console.log(input1);
  //console.log(inputLength);