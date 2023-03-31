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