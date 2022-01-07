(()=> {
console.log('soyoon');

    const burger = document.querySelector('.nav-menu__burger');
    const menu = document.querySelector('.nav-menu');
    const panel = document.querySelector('.nav-menu__panel');

function navBurger() {
    burger.classList.toggle('open');
    panel.classList.toggle('hide')

}

    burger.addEventListener('click', navBurger);
    menu.addEventListener('click', navBurger);
    

})();