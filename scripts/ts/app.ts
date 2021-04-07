// NAV BAR MOBILE EVENT
const mobileMenu = document.querySelector(".nav-menu-mobile") as HTMLDivElement;

const burger = document.querySelector(".mobile-btn") as HTMLButtonElement;
burger.addEventListener('click', e => {
  if (mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.remove('inactive');
  } else {
    mobileMenu.classList.add('inactive');
  }

  const bars = document.querySelector('.fa-bars') as HTMLElement;
  

  if (burger.id = 'inactive') {
    burger.removeAttribute('id');
  }
})

// HIDE MENU 
const links = document.querySelectorAll('.nav-link-mobile') as NodeList;
links.forEach(target => target.addEventListener('click', e => {
  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.add('inactive');
  }
}))

const resumeBtn = document.querySelector('.resume-btn') as HTMLButtonElement;
resumeBtn.addEventListener('click', e => {
  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.add('inactive');
  }
})