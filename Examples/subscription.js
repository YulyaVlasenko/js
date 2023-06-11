const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0;

const intervalId = setInterval(() => {
    if (promptCounter === MAX_PROMPT_ATTEMPTS) {
        console.log('потрібно зупинити інтервал');
        clearInterval(intervalId);
        return;
    }

    console.log('Підпишись на розсилку! - ' + Date.now());
    promptCounter += 1;
}, PROMPT_DELAY);