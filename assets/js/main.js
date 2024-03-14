document.querySelector('.header--menu').addEventListener('click', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('header__menu--open');
    if (header.classList.contains('header__menu--open')) {
        header.querySelector('.header__links').style.display = 'none';
        header.querySelector('.header__btn').style.display = 'none';
    } else {
        header.querySelector('.header__links').style.display = 'flex';
        header.querySelector('.header__btn').style.display = 'flex';
    }
});