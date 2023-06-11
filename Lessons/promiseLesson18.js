//Створення Promise-----------------------------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//     const random = Math.random();

//     if (random > 0, 5) {
//         resolve('Yes');
//     } else {
//         reject('No');
//     }
// });


//Обробка Promise--------------------------------------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if (random > 0, 5) {
//         resolve('Yes');
//         } else {
//         reject('No');
//         }
//     }, 1000)
    
// });

// promise.then((responce) =>{console.log(responce)}).catch((err)=>{console.log(err)})
// console.log(promise);



// Пояснення чому для одного промісу не використовують два then(для res і rej), а then і catch------------------------------------------------------

// const promise = new Promise((res, rej) => {
//   const random = Math.random(); // 0 - 1

//   setTimeout(() => {
//     if (random > 0.5) {
//       res({ name: "User", email: "test@gmail.com" });
//     } else {
//       rej({ err: 404, text: " Not found" });
//     }
//   }, 3000);
// });


// promise
//   .then(
//     (response) => response, (err) => console.log(err)//ось тут для для res і rej використано лише then
// )
    
//   .then((value) => console.log(value.name))
//   .catch((err) => {
//     console.error(err);
//   })
//     .finally(() => { })
  

//Метод створення запиту на бекенд----------------------------------------------------------------------------------------------

const promise = fetch("https://pokeapi.co/api/v2/pokemon/ditto");

console.log(promise);
promise
.then(resp => resp.json()) // в першому then парсимо
.then(data => console.log(data)) // в другому then підхоплюємо, те, що розпарсилось і опрацьовуємо
.catch(err => console.log(err)) //передбачає ситуацію, коли запит на бекенд неуспішний (rej), і створює певну дію, посилання, щоб код не ліг