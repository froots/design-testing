;(function() {

  var nav = document.getElementById('primary-nav');
  var header = document.getElementById('main-header');
  var menuButton;
  var HIDDEN_CLASS_NAME = 'nav--is-hidden';
  var ACTIVATED_CLASS_NAME = 'nav--is-activated';
  var MENU_BUTTON_CLASS_NAME = 'button button--menu';

  function initNav() {
    nav.classList.add(HIDDEN_CLASS_NAME);
    nav.classList.add(ACTIVATED_CLASS_NAME);
    menuButton = document.createElement('button');
    menuButton.className = MENU_BUTTON_CLASS_NAME;
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', handleMenuClick);
    header.appendChild(menuButton);
  }

  function handleMenuClick(event) {
    nav.classList.toggle(HIDDEN_CLASS_NAME);
    event.preventDefault();
  }

  initNav();

})();
