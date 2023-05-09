const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log("Clicked");
})

const li = document.querySelectorAll('li');
console.log(li);

li.forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.innerText + " li declared")
    })
})

