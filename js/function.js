function showCurrentMinute() {
    const currentTime = new Date();
    const currentMinute = currentTime .getMinutes();
    const minuteText = `The current minute is ${currentMinute }.`;
    const targetDiv = document.getElementById("current-minute");
    targetDiv.innerText = minuteText;
  }

  function hideElement() {
    const elementHide = document.getElementById("hide");
    elementHide.style.display = "none";
  }