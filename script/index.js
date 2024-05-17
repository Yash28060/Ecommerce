 // JavaScript function to toggle mobile menu
 function toggleMenu() {
  var menu = document.getElementById('menu');
  var menuBtn = document.getElementById('menuBtn');
  
  if (menu.classList.contains('hidden')) {
    // Change menu icon to close (cross)
    menuBtn.innerHTML = '<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    menu.classList.remove('hidden');
  } else {
    // Change menu icon to hamburger
    menuBtn.innerHTML = '<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    menu.classList.add('hidden');
  }
}