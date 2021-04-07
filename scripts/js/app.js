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
});
// HIDE MENU 
var links = document.querySelectorAll('.nav-link-mobile');
links.forEach(function (target) { return target.addEventListener('click', function (e) {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
}); });
