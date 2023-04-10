function showCurrentMinute() {
    const currentTime = new Date();
    const currentMinute = currentTime .getMinutes();
    const currentHour = currentTime.getHours();
    const minute = currentHour*60 + currentMinute
    const minuteText = `The current minute is ${minute }.`;
    const targetDiv = document.getElementById("current-minute");
    targetDiv.innerText = minuteText;
  }

  function hideElement() {
    const elementHide = document.getElementById("hide");
    elementHide.style.display = "none";
  }