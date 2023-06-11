const NOTIFICATION_DELAY = 3000; //час затримки для setTimeout
let timeoutId = null;

const refs = {
    notification: document.querySelector("js-alert"),
};

refs.notification.addEventListener("click", onNotificationClick);

showNotification();

//Функції

function onNotificationClick() {
    hideNotification();
    clearTimeout(timeoutId);
}

function showNotification() {
    refs.notification.classList.add("is-visible");

    timeoutId = setTimeout(() => {
        console.log("закриваємо алерт автоматично, щоб не висів");
        hideNotification();
    }, NOTIFICATION_DELAY);
}

function hideNotification() {
    refs.notification.classList.remove("is-visible");
}