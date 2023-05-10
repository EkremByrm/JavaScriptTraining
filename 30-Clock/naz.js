const clock = document.querySelector('.clock');

const temp = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    //console.log(hours, minutes, seconds);

    const html = `
    <span>${hours} </span> :
    <span>${minutes} </span> :
    <span>${seconds} </span> `
    clock.innerHTML = html;

};

setInterval(temp, 1000);