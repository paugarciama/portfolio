// SHOW BURGER MENU
var mobileMenu = document.querySelector(".nav-menu-mobile");
var modalMenu = document.querySelector(".menu-modal");
var icon1 = document.querySelector('.icon1');
var icon2 = document.querySelector('.icon2');
var burger = document.querySelector(".mobile-btn");
burger.addEventListener('click', function (e) {
    if (mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.remove('inactive');
        modalMenu.classList.remove('inactive');
    }
    else {
        mobileMenu.classList.add('inactive');
        modalMenu.classList.add('inactive');
    }
    changeIcons();
});
// HIDE BURGER MENU 
var links = document.querySelectorAll('.nav-link-mobile');
links.forEach(function (target) { return target.addEventListener('click', function (e) {
    if (!mobileMenu.classList.contains('inactive')) {
        changeDisplay();
    }
}); });
var resumeBtn = document.querySelector('.resume-btn-mobile');
resumeBtn.addEventListener('click', function (e) {
    if (!mobileMenu.classList.contains('inactive')) {
        changeDisplay();
    }
});
modalMenu.addEventListener('click', function (e) {
    if (!mobileMenu.classList.contains('inactive')) {
        changeDisplay();
    }
});
function changeDisplay() {
    mobileMenu.classList.add('inactive');
    modalMenu.classList.add('inactive');
    changeIcons();
}
function changeIcons() {
    if (icon2.classList.contains('inactive')) {
        icon2.classList.remove('inactive');
        icon1.classList.add('inactive');
    }
    else {
        icon1.classList.remove('inactive');
        icon2.classList.add('inactive');
    }
}
