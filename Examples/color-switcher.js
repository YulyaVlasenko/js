const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  const body = document.querySelector('body');
let intervalId = null;
  
function makeStyle() {
    body.style.width = "100%";
    body.style.display = "inline-block";
    body.style.textAlign = "center";
    body.style.paddingTop = "300px";
}

makeStyle();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

function changeButtonState(button) {
  button.disabled = !button.disabled;
  }

function startChangingBackgroundColor() {
  changeButtonState(startButton);
  changeButtonState(stopButton);
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }

function stopChangingBackgroundColor() {
  changeButtonState(stopButton);
  changeButtonState(startButton);
    clearInterval(intervalId);
  }

  startButton.addEventListener('click', startChangingBackgroundColor);
stopButton.addEventListener('click', stopChangingBackgroundColor);