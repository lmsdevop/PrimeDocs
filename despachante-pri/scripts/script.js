function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile')
    let textSubMobile = document.querySelector('.text-box__subtitle')
    let textTitleMobile = document.querySelector('.text-box__title')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        textSubMobile.classList.remove('close');
        textTitleMobile.classList.remove('close');
        document.querySelector('.icon').src = "assets/img/menu-ico.svg"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/menu-icon-close.svg"
        textSubMobile.classList.add('close');
        textTitleMobile.classList.add('close');

    }

}