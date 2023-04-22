const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const findCountry = (e) => {
    const find = e.target.value.toLowerCase()
   
    li.forEach(el => {
        if(el.textContent.toLowerCase().indexOf(find) !== -1 && search.value !=='') {
            el.style.display = 'block'
        } 
       
        else {
            el.style.display = 'none'
        }
    });
};
search.addEventListener('keyup', findCountry)
// -------------------------------------------------------

const infoBtn = document.querySelector('.info__link');
const infoButtons = document.querySelector('.info__buttons');
const info = document.querySelector('.info-btn');
const infoPopup = document.querySelector('.info__popup');


infoBtn.addEventListener('click',() => {
    infoButtons.classList.toggle('show')
} )

info.addEventListener('click', () => {
    infoPopup.classList.toggle('popup__active')
})