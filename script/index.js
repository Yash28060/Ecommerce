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

// Default to showing login form
toggleForms('login');

window.onload = function() {
  setTimeout(togglePopup, 1000); // 5000 milliseconds = 5 seconds
};
