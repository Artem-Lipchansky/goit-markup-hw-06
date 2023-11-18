

// ======================================MODAL===========================================

(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();


// ==================================BURGER-MENU=============================================== 

document.addEventListener('DOMContentLoaded', function() {
    var burgerMenuBtn = document.querySelector('.burger-menu-btn');
    var burgerOverlay = document.querySelector('.burger-overlay');
    var burgerCloseBtn = document.querySelector('.burger-close-btn');

    burgerMenuBtn.addEventListener('click', toggleBurgerMenu);
    burgerCloseBtn.addEventListener('click', toggleBurgerMenu);

    function toggleBurgerMenu() {
        var isOpen = burgerOverlay.classList.contains('is-open');
        if (isOpen) {
            burgerOverlay.classList.remove('is-open');
        } else {
            burgerOverlay.classList.add('is-open');
        }
    }
});