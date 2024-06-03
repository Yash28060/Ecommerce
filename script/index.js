 // JavaScript function to toggle mobile menu
 function toggleMenu() {
  var menu = document.getElementById('menu');
  var menuBtn = document.getElementById('menuBtn');
  
  if (menu.classList.contains('hidden')) {
    // Change menu icon to close (cross)
    menuBtn.innerHTML = '<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    menu.classList.remove('hidden');
    menuBtn.classList.remove('relative');
    menuBtn.classList.add('fixed','left-5','top-10');
  } else {
    // Change menu icon to hamburger
    menuBtn.innerHTML = '<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    menu.classList.add('hidden');
  }
}
const overlay = document.getElementById("popupOverlay");

function togglePopup() {
  if (overlay.classList.contains("pointer-events-none")) {
    overlay.classList.remove("pointer-events-none");
    setTimeout(() => {
      overlay.classList.remove("opacity-0", "scale-75");
    }, 10);
  } else {
    overlay.classList.add("opacity-0", "scale-75");
    setTimeout(() => {
      overlay.classList.add("pointer-events-none");
    }, 300);
  }
}

// cart section
const cartOverlay = document.getElementById("cartOverlay");
function toggleCart() {
  if (cartOverlay.classList.contains("pointer-events-none")) {
    cartOverlay.classList.remove("pointer-events-none");
    setTimeout(() => {
      cartOverlay.classList.remove("opacity-0", "scale-75");
    }, 10);
  } else {
    cartOverlay.classList.add("opacity-0", "scale-75");
    setTimeout(() => {
      cartOverlay.classList.add("pointer-events-none");
    }, 300);
  }
}
//  or this below function but there is no transition delay in it
// function toggleCart() {
//   const classes = ["pointer-events-none", "opacity-0", "scale-75"];
  
//   classes.forEach(cls => {
//     cartOverlay.classList.toggle(cls);
//   });
// }

// cartShopoverlay
const cartShopOverlay = document.getElementById("cartShopOverlay");
function toggleCartShop() {
  if (cartShopOverlay.classList.contains("pointer-events-none")) {
    cartShopOverlay.classList.remove("pointer-events-none");
    setTimeout(() => {
      cartShopOverlay.classList.remove("opacity-0", "scale-75");
    }, 10);
  } else {  
    cartShopOverlay.classList.add("opacity-0", "scale-75");
    setTimeout(() => {
      cartShopOverlay.classList.add("pointer-events-none");
    }, 300);
  }
}

function toggleForms(formType) {
  const loginForm = document.getElementById('login_form');
  const signUpForm = document.getElementById('signup_form');
  const signUpHeading = document.getElementById('sign_up');
  const logInHeading = document.getElementById('log_in');

  if (formType === 'signup') {
    signUpForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    signUpHeading.classList.add('underline', 'underline-offset-4','text-red-500');
    logInHeading.classList.remove('underline', 'underline-offset-4','text-red-500');
  } else if (formType === 'login') {
    loginForm.classList.remove('hidden');
    signUpForm.classList.add('hidden');
    logInHeading.classList.add('underline', 'underline-offset-4','text-red-500');
    signUpHeading.classList.remove('underline', 'underline-offset-4','text-red-500');
  }
}

// carousel starts here //
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
  slides.forEach((slide) => slide.classList.add('hidden'));
  slides[index].classList.remove('hidden');
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function startCarousel() {
  showSlide(currentIndex);
  setInterval(showNextSlide, 4000);
}

// carousel for products starts here //

let initialIndex = 0;
const products = document.querySelectorAll('.prod');
const productsPerPage = 4;

function showProducts(index) {
  products.forEach((prod, i) => {
    prod.classList.add('hidden');
    if (i >= index && i < index + productsPerPage) {
      prod.classList.remove('hidden');
    }
  });
}

function showRightSlide() {
  initialIndex = (initialIndex + 1) % products.length;
  showProducts(initialIndex);
}

function showLeftSlide() {
  initialIndex = (initialIndex - 1 + products.length) % products.length;
  showProducts(initialIndex);
}

function showProd() {
  showProducts(initialIndex);
  setInterval(showRightSlide, 4000);
}

showProd();



window.addEventListener('load', startCarousel);

// Default to showing login form
toggleForms('login');

window.onload = function() {
  setTimeout(togglePopup, 4000); // 5000 milliseconds = 5 seconds
};
