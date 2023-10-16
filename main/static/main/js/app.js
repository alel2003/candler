// mobile burger
const menu__button = document.querySelector('.nav-menu__button');
const menu__list = document.querySelector('.nav-menu');
const menu_cross = document.querySelector('.nav-menu__cross');
const arrow__bg = document.querySelector('.arrow-bg');
const nav__menuLink = document.querySelectorAll('.nav-menu__link');
const section = document.querySelectorAll('section');
const langues_menu = document.querySelector('.nav-item__dropdown')
const mobile__langues = document.querySelector('.dropdown-mobil')


menu__button.addEventListener('click', function() {
    menu__button.classList.add('hidden');
    menu__list.classList.remove('hidden');
    menu_cross.classList.remove('hidden');
    arrow__bg.style.zIndex = '-1';
});
// click link
nav__menuLink.forEach(i =>  {
  i.addEventListener('click', function() {
    console.log(i)
    menu__list.classList.add('hidden');
    menu__button.classList.remove('hidden');
    menu_cross.classList.add('hidden');
    arrow__bg.style.zIndex = '90';
    // for the convenience of the user, the transition is 
    // tracked and padding is added to it, then after a while 
    // it is removed
    const targetId = i.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.paddingTop = '100px'; 
    }
    const paddingTopValue = window.getComputedStyle(targetSection, null).getPropertyValue('padding-top');
    console.log(paddingTopValue)
    setTimeout(function() {
      if(paddingTopValue === '100px') {
        targetSection.style.paddingTop = '50px';
      }
    },5000)
    });
  });
 
menu_cross.addEventListener('click', function() {
  menu__list.classList.add('hidden');
  menu__button.classList.remove('hidden');
  menu_cross.classList.add('hidden');
  arrow__bg.style.zIndex = '90';
})

// click on the menu to change language
langues_menu.addEventListener('click', function() {
  const langues__link = document.querySelector('.dropdown-list')
  const language__arrow = document.querySelector('.fa-solid')
  langues__link.classList.toggle('hidden')
  language__arrow.classList.toggle('arrow-rotate')
})

// click on the menu-mobile to change language
mobile__langues.addEventListener('click', function() {
  const langues__link = document.querySelector('.dropdown-list__mobile')
  const language__arrow = document.querySelector('.fa-sort-down')
  langues__link.classList.toggle('hidden')
  language__arrow.classList.toggle('arrow-rotate')
})


// scrool
const navbar = document.getElementById('navbar');
const nav__link = document.querySelectorAll('.nav__link');
const nav__num = document.querySelector('.header-tel__num');
const icon = document.getElementById('icon');
const nav__button = document.querySelectorAll('.nav-menu__span');

function handleScroll() {
  const scrollY = window.scrollY;
  navbar.style.zIndex = '100'; 
  if (scrollY > 100) { 
    navbar.style.backgroundColor = '#BEA495'; 
    for(i of nav__link) {
      i.style.color = 'white'
    };
    nav__num.style.color = 'white';
    icon.innerHTML = `
    <path d="M17.4999 12.8756L13.1083 12.3676L11.0083 14.4663C8.64258 13.2639 6.71973 11.3422 5.51659 8.97796L7.62492 6.8709L7.11659 2.49854H2.52492C2.04159 10.9768 9.01658 17.9476 17.4999 17.4645V12.8756Z" fill="white"/>
    `;
    for(i of nav__button) {
      i.style.backgroundColor = 'white'
    };
  }else {
    navbar.style.backgroundColor = 'transparent';
    for(i of nav__link) {
      i.style.color = 'black'
    };
    nav__num.style.color = 'black';
    icon.innerHTML = `
    <path d="M17.4999 13.8612L13.1083 13.3532L11.0083 15.4519C8.64258 14.2495 6.71973 12.3278 5.51659 9.96356L7.62492 7.8565L7.11659 3.48413H2.52492C2.04159 11.9624 9.01658 18.9332 17.4999 18.4501V13.8612Z" fill="#BEA495"/>
    `;
    for(i of nav__button) {
      i.style.backgroundColor = '#A5978E'
    };
  }
}

window.addEventListener('scroll', handleScroll);


// carousel mobile bootstrap
var myCarousel = document.querySelector('#carouselReviews')
var carousel = new bootstrap.Carousel(carouselReviews, {
    touch:true
})


// swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        992: {
            slidesPerView: 2.5
        },
        1024: {
          slidesPerView: 2.5
        },
      },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    });


