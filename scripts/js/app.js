// NAV BAR MOBILE EVENT
var mobileMenu = document.querySelector(".nav-menu-mobile");
var burger = document.querySelector(".mobile-btn");
burger.addEventListener('click', function (e) {
    if (mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.remove('inactive');
    }
    else {
        mobileMenu.classList.add('inactive');
    }
    var icon1 = document.querySelector('.icon1');
    var icon2 = document.querySelector('.icon2');
    if (icon2.classList.contains('inactive')) {
        icon2.classList.remove('inactive');
        icon1.classList.add('inactive');
    }
    else {
        icon1.classList.remove('inactive');
        icon2.classList.add('inactive');
    }
});
// HIDE MENU 
var links = document.querySelectorAll('.nav-link-mobile');
links.forEach(function (target) { return target.addEventListener('click', function (e) {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
}); });
var resumeBtn = document.querySelector('.resume-btn');
resumeBtn.addEventListener('click', function (e) {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
});
