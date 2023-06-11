const form = document.querySelector("form");
const KEY = "form-data"; // 3 -- ключ для local storage
let data = JSON.parse(sessionStorage.getItem(KEY)) ?? {};// створюємо об'єкт, щоб записувати значення з input // 4 -- для іффі нам потрібно або значення з local storage або пустий об'єкт
                                                   // ?? - реагують на null або undefined 
form.addEventListener("submit", onSubmit); //відправляти форму
form.addEventListener("input", onInput); //збирати об'єкт

function onSubmit(evt) {
  evt.preventDefault();
  console.log(data); // 2 -- консолимо дані
  data = {}; // 6 -- підчищаємо об'єкт
  localStorage.removeItem(KEY)// 6 -- підчищаємо local storage
  evt.currentTarget.reset(); // 6 -- підчищаємо поля форми
}
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE?retiredLocale=uk
(function(){ // 4 -- тепер маємо засетити через функцію іффі, яка після завантаження буде викликатися і видалятися
const {email, message} = form.elements; // 5 -- console.dir(form), з нашої форми заповнюємо значення поля email та message
email.value = data.email || '';
message.value = data.message || '';
})()


function onInput(evt) {
  const { name, value } = evt.target; // 1 -- деструктуризуємо властивості об'єкта на якому відбувається подія input
  data[name] = value; // 1 -- атрибут даних дорівнює внесеному значенню

  localStorage.setItem(KEY, JSON.stringify(data)); // 3 -- створюємо local storage (в цьому прикладі без throttle), дані тепер відображаються в сховищі
}
    
// sessionStorage та localStorage різниці немає