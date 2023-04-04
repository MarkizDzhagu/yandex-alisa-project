document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.header__nav').classList.toggle('_active');
    document.body.classList.toggle('_lock');
}



