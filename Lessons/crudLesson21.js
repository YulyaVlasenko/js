// // CRUD
// // C - Create -POST
// // R - Read - GET
// // U - Update - PUT PATCH


// // PATCH

// //Before Update
// const user = {
//     email: 'test@gamil.com',
//     password: 'qwerty111',
//     name: 'Test user'
// }

// const options = {
//     method: 'PATCH',
//     body: JSON.stringify({
//         name: 'New name'
//     })
// }
// fetch('my-site/user/12',options)

// // After Update
// const updateUser = {
//     email: 'test@gamil.com',
//     password: 'qwerty111',
//     name: 'New name'
// }

// // PUT
// //Before Update
// const user = {
//     email: 'test@gamil.com',
//     password: 'qwerty111',
//     name: 'Test user'
// }

// const options = {
//     method: 'PUT',
//     body: JSON.stringify({
//         email: 'test@gamil.com',
//         password: 'qwerty111',
//         name: 'New name'
//     })
// }
// fetch('my-site/user/12',options)

// //After Update

// const updateUser = {
//     email: 'test@gamil.com',
//     password: 'qwerty111',
//     name: 'New name'
// }


// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.statusText)
//         }

//         return response.json()
//     })
//     .then(data => console.log(data))




// // POST
// const data = {
//     title: 'Create first post',
//     body: 'Learn CRUD',
//     userId: 1
// }

// const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8'
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.statusText)
//         }

//         return response.json()
//     })
//     .then(data => console.log(data))


// // PATCH

// const data = {
//     title: 'New Title',
//     body: 'I love JS'
// }

// const options = {
//     method: 'PATCH',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8'
//     }
// }
// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//     .then(response => {
//         console.log(response);
//         if (!response.ok) {
//             throw new Error(response.statusText)
//         }

//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))



// // PUT
// const data = {
//     title: 'New Title',
// }

// const options = {
//     method: 'PUT',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8'
//     }
// }
// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//     .then(response => {
//         console.log(response);
//         if (!response.ok) {
//             throw new Error(response.statusText)
//         }

//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))



// DELETE
const options = {
    method: "DELETE"
}
fetch('https://jsonplaceholder.typicode.com/posts/1', options)
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw new Error(response.statusText)
        }
    })
    .catch(err => console.log(err)); // у відповідь з бекенду отримуємо порожній об'єкт, тому парс робити не потрібно


// http://127.0.0.1:3000/api/question     => POST
// http://127.0.0.1:3000/api/getAll       => GET

// Про id:
// - при методі POST ми не вказуємо id, бекенд повертає створений об'єкт з id
// - при методі PATH ми вказуємо id в http як ендпоінт
// - при методі PUT ми вказуємо id в http як ендпоінт, бекенд повертає заново створений об'єкт - id залишається без змін
// - при методі DELETE вказуємо id або в http як ендпоінт або в опціях(залежить від документації бекенду), об'єкт видаляється весь разом з id, на місці цього id ніколи не запишеться новий об'єкт

// При створенні розмітки id зберігаємо в data-атрибутах

