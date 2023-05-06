const image = document.querySelector('.country-flag');

const shake = () => {
    image.classList.add('shake-animaton')
};
image.addEventListener('click', shake)
// -------------------------------------------------
const modal = document.querySelector('.modal-shadow');
const close = document.querySelector('.close');

const shakeOpen = () => {
    setTimeout(openModal,1200)
};
const openModal = () => {
    modal.style.display = 'block'
};

image.addEventListener('click', shakeOpen)
close.addEventListener('click', ()=> {
    modal.style.display = 'none'
    image.classList.remove('shake-animaton')
})