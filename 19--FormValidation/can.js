const form = document.querySelector('.singupform');
const message = document.querySelector('.message');
const usernamePattern = /^[a-z]{6,10}$/;


form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;

    if (usernamePattern.test(username)) {
        message.textContent = 'Doğru';
        alert('doğru');
    } else {
        message.textContent = 'Yanlış';
    }

})

form.username.addEventListener('keyup', e => {

    // console.log(e);
    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success')
    } else {
        form.username.setAttribute('class', 'error')
    }
})

