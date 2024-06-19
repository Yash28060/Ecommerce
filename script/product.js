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
startCarousel(); 

window.addEventListener('load', showProd);