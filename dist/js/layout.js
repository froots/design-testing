;(function() {

  var nav = document.getElementById('primary-nav');
  var header = document.getElementById('main-header');
  var menuButton;
  var HIDDEN_CLASS_NAME = 'nav--is-hidden';

  function initNav() {
    nav.classList.add(HIDDEN_CLASS_NAME);
    menuButton = document.createElement('button');
    menuButton.className = 'button button--menu';
    menuButton.textContent = 'Menu';
    header.appendChild(menuButton);
  }

  initNav();

})();
