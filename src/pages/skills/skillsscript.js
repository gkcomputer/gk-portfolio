let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector("progress-value");

let progressStartValue = 0,
  progressEndValue = 20,
  speed = 100;

let progress = setInterval(() => {
  progressStartValue++;
  progressValue.textContent = `${progressStartValue}%`;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
