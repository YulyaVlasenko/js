const start = document.querySelector(".js-start");
const container = document.querySelector(".js-container");

start.addEventListener("click", onStart);

function onStart() {
    start.disabled = true;

  const promises = [...container.children].map((item, idx) => {
    item.textContent = "";

    const promise = createPromise(idx);
    promise
      .then((value) => (item.textContent = value))
      .catch((err) => (item.textContent = err));
    return promise;
  });

  Promise.allSettled(promises).then((promise) => {
    const isAllRej = promise.every(({ status }) => status === "rejected");
    const isAllRes = promise.every(({ status }) => status === "fulfilled");

    setTimeout(() => {
      if (isAllRej || isAllRes) {
        alert("Winner");
      } else {
        alert("Try again");
      }
      start.disabled = false;
    }, 1000);
  });
}

function createPromise(delay) {
  return new Promise((res, rej) => {
    const random = Math.random();
    setTimeout(() => {
      if (random > 0.5) {
        res("🤑");
      } else {
        rej("😈");
      }
    }, delay * 1000);
  });
}
