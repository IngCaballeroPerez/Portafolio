/**
GAMEPLAY PORTFOLIO — Progressive interactions.
Without JavaScript the navigation stays visible and <details> still work.
The 760px breakpoint must match css/styles.css.
*/

// 01. REFERENCES
var menuButton = document.querySelector('.menu-toggle');
var navigation = document.querySelector('#navigation');
var mobileView = window.matchMedia('(max-width: 760px)');

function label(key, fallback) {
  return typeof window.t === 'function' ? window.t(key) : fallback;
}

// 02. STATE: one function keeps the visual and accessible state coherent.
function setMenuOpen(isOpen) {
  navigation.classList.toggle('is-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? label('menu_close', 'Close') : label('menu', 'Menu');
}

// 03. EVENTS: the button only appears after the interactions are registered.
if (menuButton && navigation) {
  menuButton.addEventListener('click', function () {
    var isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  navigation.addEventListener('click', function (event) {
    var link = event.target.closest('a');
    if (!mobileView.matches || !link) {
      return;
    }
    setMenuOpen(false);
    var target = document.getElementById(link.hash.slice(1));
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.addEventListener('blur', function () {
        target.removeAttribute('tabindex');
      }, { once: true });
    }
  });

  document.addEventListener('keydown', function (event) {
    var isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    if (event.key === 'Escape' && isOpen) {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  mobileView.addEventListener('change', function () {
    var focusWasInNavigation = navigation.contains(document.activeElement);
    setMenuOpen(false);
    if (mobileView.matches && focusWasInNavigation) {
      menuButton.focus();
    }
  });

  // Keep the button label in sync when the language changes (even if open).
  document.addEventListener('i18n:change', function () {
    var isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuOpen(isOpen);
  });

  menuButton.hidden = false;
  setMenuOpen(false);
  document.documentElement.classList.add('js');
}

// 03b. GALLERY (M.E.S): without JS, thumbs open the image; with JS, they swap the main one.
var galleryMain = document.getElementById('mesMain');
if (galleryMain) {
  var thumbs = document.querySelectorAll('.gallery-thumbs .thumb');
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function (event) {
      event.preventDefault();
      var img = thumb.querySelector('img');
      galleryMain.src = thumb.getAttribute('data-full');
      if (img) { galleryMain.alt = img.alt; }
      thumbs.forEach(function (t) { t.classList.remove('is-active'); });
      thumb.classList.add('is-active');
    });
  });
}

// 04. FOOTER YEAR
var yearLabel = document.querySelector('#year');
if (yearLabel) {
  yearLabel.textContent = String(new Date().getFullYear());
}