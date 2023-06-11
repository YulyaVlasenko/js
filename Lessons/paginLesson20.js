// URL складається з: protocol, host, path(або end-point), parameters

//Переваги пагінації:
//- обмеження розміру завантажених даних при кожному запитіЖ
//- швидкість відображення сторінки веб-сайту;
//- завантаження додаткового контенту лише за необхідності.

//Значення пагінації для бекенда вказуються у параметрах.
//Для керування пагінацією бекенд надає у параметрах значення: кількість елементів та номер групи елементів.
//Бекенд надає дані, коли настане кінець пагінації.
// Найпопулярніші типи пагінації: load more..., infinity scroll, по номерах сторінок(коли перемальовується вся стр.)


// https://the-one-api.dev/

// const BASE_URL = "https://the-one-api.dev/v2";
// const ENDPOINT = "/character";
// const TOKEN = "18aEQHs2_l3sCMmPg1yk";

// const option = {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${TOKEN}`, //Authorization: Bearer your-api-key-123
//   },
// };


// fetch(`${BASE_URL}${ENDPOINT}?limit=50&page=19 `, option) //тут внесли параметри пагінації
//   .then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));


// __________________________________________________________________________________________________________________________________________________

// //Працюємо з цією freeApi: https://developer.themoviedb.org/

// // ПРИКЛАД ДЛЯ КНОПКИ LOAD MORE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const BASE_URL = "https://api.themoviedb.org/3";
// const ENDPOINT = "/trending/movie/week";
// const API_KEY = "345007f9ab440e5b86cef51be6397df1";

// //функція для отримання даних
// function getTrending(page = 1) {
//   return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(
//     (resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     }
//   );
// }

// // getTrending()
// //     .then((data) => console.log(data))
// //     .catch((err) => console.log(err));

// // створюємо розмітку

// const list = document.querySelector(".js-list");

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, title, vote_average }) => `<li>
//     <img src="${
//       poster_path
//         ? "https://image.tmdb.org/t/p/w400" + poster_path // "https://image.tmdb.org/t/p/w400null"
//         : "https://www.reelviews.net/resources/img/default_poster.jpg" //використовуємо тернарне порівняння для того щоб використати дефолтну картинку, якщо постер не підтягнеться
//     }" width="400" alt="${title}">
//     <p>${vote_average || "Not found"}</p>
//     <h2>${title || "No name"}</h2>
// </li>`
//     )
//     .join("");
// }

// // тоді обробка результату функції матиме наступний вигляд:

// getTrending() // сюди прийде значення не undefined, а дефолтне, яке закладене у оголошенні фунції function getTrending(page = 1)
//   .then((data) => {
//     list.insertAdjacentHTML("beforeend", createMarkup(data.results));
//     if (data.page !== data.total_pages) {
//         paginationBtn.hidden = false;
//     }
//   })
//     .catch((err) => console.log(err));
  
// // Робимо сторінки пагінації

// const paginationBtn = document.querySelector(".js-pagination");

// paginationBtn.addEventListener("click", onPagination);

// // при кліку на кнопку ми робимо запит на наст. сторінку
// // для контролю яка у нас взагалі стр створюємо зміну:

// let currentPage = 1;

// // У колбек прокидаємо обробку функції getTrending()

// function onPagination() {
//   currentPage += 1; // інкремент сторінки
//   getTrending(currentPage)
//     .then((data) => {
//       list.insertAdjacentHTML("beforeend", createMarkup(data.results));
//       if (data.page === data.total_pages) {
//         paginationBtn.hidden = true;
//       }
//     })
//     .catch((err) => console.log(err));
// }


// // //Пропишемо все попідряд


// // const BASE_URL = "https://api.themoviedb.org/3";
// // const ENDPOINT = "/trending/movie/week";
// // const API_KEY = "345007f9ab440e5b86cef51be6397df1";
// // const list = document.querySelector(".js-list");
// // const paginationBtn = document.querySelector(".js-pagination");
// // let currentPage = 1;

// // paginationBtn.addEventListener("click", onPagination);

// // function onPagination() {
// //   currentPage += 1; // інкремент сторінки
// //   getTrending(currentPage)
// //     .then((data) => {
// //       list.insertAdjacentHTML("beforeend", createMarkup(data.results));
// //       if (data.page === data.total_pages) {
// //         paginationBtn.hidden = true;
// //       }
// //     })
// //     .catch((err) => console.log(err));
// // }


// // function getTrending(page = 1) {
// //   return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(
// //     (resp) => {
// //       if (!resp.ok) {
// //         throw new Error(resp.statusText);
// //       }

// //       return resp.json();
// //     }
// //   );
// // }

// // getTrending() // сюди прийде значення не undefined, а дефолтне, яке закладене у оголошенні фунції function getTrending(page = 1)
// //   .then((data) => {
// //     list.insertAdjacentHTML("beforeend", createMarkup(data.results));
// //     if (data.page !== data.total_pages) {
// //         paginationBtn.hidden = false;
// //     }
// //   })
// //     .catch((err) => console.log(err));

// // function createMarkup(arr) {
// //   return arr
// //     .map(
// //       ({ poster_path, title, vote_average }) => `<li>
// //     <img src="${
// //       poster_path
// //         ? "https://image.tmdb.org/t/p/w400" + poster_path // "https://image.tmdb.org/t/p/w400null"
// //         : "https://www.reelviews.net/resources/img/default_poster.jpg" //використовуємо тернарне порівняння для того щоб використати дефолтну картинку, якщо постер не підтягнеться
// //     }" width="400" alt="${title}">
// //     <p>${vote_average || "Not found"}</p>
// //     <h2>${title || "No name"}</h2>
// // </li>`
// //     )
// //     .join("");
// // }



// ПРИКЛАД ДЛЯ INFINITY SCROLL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Реалізація скролу через https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// Він слідкує за елементами які видимі у в'юпорті і додає нові при скролі

const list = document.querySelector(".js-list");
const guard = document.querySelector(".js-guard"); // 4 -- порожній елемент, за яким буде слідкувати observer щоб фіксувати кінець сторінки
// const guard2 = document.querySelector('.js-guard2')
const BASE_URL = "https://api.themoviedb.org/3";
const ENDPOINT = "/trending/movie/week";
const API_KEY = "345007f9ab440e5b86cef51be6397df1";
const options = {// 2 -- ств опції для екземпляра класу
  root: null, // null - слідкуємо за усім в'юпортом або ми вказуємо область яка контролюватиметься
  rootMargin: "1900px", // за ск px до входження елемента у root має бути викликаний колбек
  threshold: 0, // на скільки % елемент перетинає rootMargin (0-1) застосовується для реалізації анімацій
};

const observer = new IntersectionObserver(onPagination, options); // 1--ств екземпляр класу для observer, це з документації
let currentPage = 1;

// observer.observe(guard2)

function getTrending(page = 1) {
  return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(
    (resp) => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    }
  );
}

getTrending()
  .then((data) => {
    list.insertAdjacentHTML("beforeend", createMarkup(data.results));
    if (data.page !== data.total_pages) { // 5 -- розташовуємо порожній елемент після того як розмітка відмалюється
      observer.observe(guard); // 5 -- на observer є метод observe, який слідкуватиме за порожнім елементом guard
    }
  })
  .catch((err) => console.log(err));

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title, vote_average }) => `<li>
      <img src="${
        poster_path
          ? "https://image.tmdb.org/t/p/w400" + poster_path // "https://image.tmdb.org/t/p/w400null"
          : "https://www.reelviews.net/resources/img/default_poster.jpg"
      }" width="400" alt="${title}">
      <p>${vote_average || "Not found"}</p>
      <h2>${title || "No name"}</h2>
  </li>`
    )
    .join("");
}

function onPagination(entries, observer) { // 3 -- створюємо колбек, згідно док колбек повертає дві власт. entries, observer
  // console.log(entries);
  entries.forEach((entry) => { // 6 -- передаємо властивості
    console.log(entry);
    if (entry.isIntersecting) { // 6 -- якщо наш елемент набув вастивість (isIntersecting: true), тобто перетнув rootMargin, то
      currentPage += 1; // 6 -- робимо інкремент початкової сторінки, передаємо її значення у ф. getTrending()
      getTrending(currentPage).then((data) => { // 6 -- обробляємо отримані дані з бекенда
        list.insertAdjacentHTML("beforeend", createMarkup(data.results)); // 6 -- відмальовуємо розмітку під ці дані
        if(data.page === data.total_pages){ // 7 -- коли вивелись усі сторінки потрібно прибрати observer, тому що запити на наступну сторінку буде спрацьовувати далі
            observer.unobserve(guard) // 7 -- таким чином ми відключаємо observer
        }
      });
    }
  });
}

// entries - це масив сутностей observer, entry - один із елементів які відслідковуються
// також потрібно врахувати низьку швидкість інтернету, за рахунок цього може підвантажитись 2 сторінки і спрацювати 2 рази подія підвантаження,
// щоб цого уникнути задаємо min-heigh для елемента у стилях

