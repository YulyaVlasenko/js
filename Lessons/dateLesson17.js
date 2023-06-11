//бібліотека для Date 'date-fns'


//Приклад 1

// const date1 = new Date();
// console.log('date1', date1);

// setTimeout(() => {
//     const date2 = new Date();

//     console.log('date1', date1);
//     console.log('date2', date2);

//     console.log(date2 - date1);
// }, 3000);

//Приклад 2

// const date1 = new Date().getTime();
// console.log('date1', date1);

// setTimeout(() => {
//     const date2 = new Date().getTime();

//     console.log('date1', date1);
//     console.log('date2', date2);

//     console.log(date2 - date1);
// }, 3000);

//Приклад 3
//щоб не створювати зайвий обєкт з методами new Date(), використовуємо Date.now() і отримуємо число, просто дату


const date1 = Date.now();
console.log('date1', date1);

setTimeout(() => {
    const date2 = Date.now();

    console.log('date1', date1);
    console.log('date2', date2);

    console.log(date2 - date1);
}, 3000);