const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


console.log(nav.classList);


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        bodyClose = nav.classList.value;

    });

}



if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

