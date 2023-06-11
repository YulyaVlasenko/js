const add = document.querySelector('.js-add-comment');
const getAll = document.querySelector('.js-get-all-comments');
const formWrapper = document.querySelector('.js-form-container');
const listOfComments = document.querySelector('.js-added-comments');



add.addEventListener('click', handlerCreateForm); // 1 -- відмальовуємо будову форми із полями зазначеними в док бекенду(обов'язкові зі статусом required)
getAll.addEventListener('click', handleGetAllComments);

function handlerCreateForm() { // 1 --
    formWrapper.innerHTML = `<form action="submit" class="js-form">
    <input type="text" name="name" required> 
    <input type="tel" name="phone" required>
    <input type="email" name="email" required>
    <textarea name="comment" cols="30" rows="10"></textarea>
    <button>Add comment</button>
</form>`// створюючи атрибут name, ми вносимо його значення у властивість elements елемента form (form.elements)

    const form = document.querySelector('.js-form');
    form.addEventListener('submit', handlerSubmit) // 2 -- відправляємо заповнену форму
}

function handlerSubmit(evt) { // 2 --
    evt.preventDefault();
    console.dir(evt.currentTarget);
    const { name, phone, email, comment } = evt.currentTarget.elements;
    const data = { // 2 -- витягуємо значення і формуємо об'єкт
        name: name.value,
        phone: phone.value,
        email: email.value,
        comment: comment.value
    }
    serviceAddComment(data)
        .then(respData => listOfComments.insertAdjacentHTML('beforeend', createOneCommentMarkup(respData)))
        .catch(err => alert(err))
        .finally(() => formWrapper.innerHTML = '')

}

function serviceAddComment(data) {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": 'application/json'
        }
    }

    return fetch('http://127.0.0.1:3000/api/question', options)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
        })
}

function createOneCommentMarkup({ _id, name, phone, email, comment = 'Comment is empty' }) {
    return `<li data-comment-id="${_id}">
    <h2>Name: ${name}</h2>
    <h3>Phone: ${phone}</h3>
    <h3>Email: ${email}</h3>
    <p>${comment}</p>
</li>`
}

function handleGetAllComments() {
    serviceGetAll()
        .then(data => listOfComments.innerHTML = data.map(createOneCommentMarkup).join(''))
        .catch(err => alert(err));
}

function serviceGetAll() {
    return fetch('http://127.0.0.1:3000/api/getAll')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
        })
}