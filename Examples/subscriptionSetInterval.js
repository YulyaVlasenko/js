import BSN from 'bootstrap.native';
//getbootstrap.com ЗВІДСИ ВЗЯЛИ РОЗМІТКУ ДЛЯ html (MODAL), і стилі підключили через link
//підключили бібліотеку bootstrap.native щоб звідти взяти js
//ініціалізуємо модалку з бібліотеки:

const refs = {
    modal: document.querySelector('subscription-modal'),
    subscribeBtn: document.querySelector('button[data-subscribe]'),
};

const modal = new BSN.Modal("#subscription-modal");
const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
    if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
        console.log('Максимальна кількість надоїдань або підписався');
        return;
    }

    setTimeout(() => {
        console.log('Відкриваєм надоїдалку');
        modal.show();
        promptCounter += 1;
    }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
    hasSubscribed = true;
    modal.hide();
}
