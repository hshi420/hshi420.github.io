function showAlert() {
  alert("I'm here to show you an alert!");
}



function parseArray() {
  let userInput = prompt("Enter a list of numbers, no comma:");
  let inputArray = userInput.split("").map(Number);
  inputArray.sort((a, b) => a - b);
  alert(inputArray);
}

