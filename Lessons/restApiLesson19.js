// HTTP методи абревіатура CRUD:

// C - post
// R - get
// U - put, patch
// D - delete


// Методи архітектури бекенду найбільш популярні:
// REST
// SOAP - більш сек'юрна

// Responce (відповідь сервера - об'єкт), має властивість
//                  ok: true
//                  ok: false
// яка вказує чи запит успішний

// Відправка запиту або отримання відповіді від сервера без перезавантаження сторінки за допомогою технологій:
//                  AJAX(Asynchronous JavaScript and XML)
//                  XMLHttpRequest (використовувався раніше)

// Кроссдоменні запити. Політика Cors. Cors захист бекенда.
// Якщо домену клієнта немає в масиві доменів, які можуть стукатись на бекенд, сервер не надасть дані, хоча ok: true.
// назва домену зашита у реквест хедер у властивість origin.
// можна спробувати обійти через Postman

// Про роботі з free Api, відноситись з нею як з бібліотекою:
// - спочатку вивчаємо док.;
// - використовуються для тесту методів, частіше лише для методу get;
// - вивчаємо як авторизуватися, аутентифікуватися;
// - далі знаходимо базовий url і присвоюємо його в зміну: 

//const BASE_URL = "http://api.weatherapi.com/v1";

// - обираємо ендпоїнт та його формат json або xml;

//const END_POINT_FORECAST = "/forecast.json";

// - переходимо до параметрів, дивимось які обовязкові (позначені * або required)
// - формуємо запит в postman

//const KEY_API = "ce2cb9b2a3da414bb5b172546231704"; //ключ,який ми додаємо в query parametres. Така авторизація не дуже security

// Розглянемо авторизацію через Bearer (ключ зашивається в headers і його не видно в link)
//Всі авторизації можна побачити в postman на закладці autorization, найб. поп. Bearen token та auth 2.0

// https://the-one-api.dev/

const BASE_URL = "https://the-one-api.dev/v2";
const ENDPOINT = "/character";
const TOKEN = "18aEQHs2_l3sCMmPg1yk";

const option = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${TOKEN}`, //Authorization: Bearer your-api-key-123
  },
};

// якщо нам потрібно використати ще один метод, то створюємо ще одні option

// const option2 = {
//     method: "POST",
//     body: {
//         name : 'Artem',
//         email: 'test@gmail.com',
//         password: '12345'
//     },
//     headers:{
//       Authorization: `Bearer ${TOKEN}`
//     }
//   };

fetch(`${BASE_URL}${ENDPOINT}?limit=50&page=19 `, option) //тут внесли параметри пагінації
  .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
