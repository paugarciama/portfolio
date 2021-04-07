// NAV BAR MOBILE EVENT
const mobileMenu = document.querySelector(".nav-menu-mobile") as HTMLDivElement;

const burger = document.querySelector(".mobile-btn") as HTMLButtonElement;
burger.addEventListener('click', e => {
  if (mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.remove('inactive');
  } else {
    mobileMenu.classList.add('inactive');
  }

  const icon1 = document.querySelector('.icon1') as HTMLSpanElement;
  const icon2 = document.querySelector('.icon2') as HTMLSpanElement;


  if (icon2.classList.contains('inactive')) {
    icon2.classList.remove('inactive');
    icon1.classList.add('inactive');
  } else {
    icon1.classList.remove('inactive');
    icon2.classList.add('inactive');
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