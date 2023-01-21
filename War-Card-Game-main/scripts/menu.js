const burgerButton = document.querySelector('.burger-icon');
const burgerNav = document.querySelector('.menu');
const invisible = document.querySelector('.none');
const wrapper = document.querySelector('.wrapper'); 
let active = false; 

burgerButton.addEventListener('click', function(e) {
    e.preventDefault();
    if(!active) {
         burgerButton.classList.add('is-center');
        setTimeout(()=> {
            burgerNav.classList.add('is-active');
            burgerButton.classList.add('is-active');
            wrapper.classList.add('hidden__wraper');
            invisible.classList.remove('none');
        }, 200) 
    } else {
        setTimeout(()=> {
            burgerButton.classList.remove('is-center');
        }, 200)
        burgerNav.classList.remove('is-active');
        burgerButton.classList.remove('is-active');
        wrapper.classList.remove('hidden__wraper');
        invisible.classList.add('none');
    }
    active = !active;
})