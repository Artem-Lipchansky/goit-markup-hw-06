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





//   // Отримуємо всі кнопки для відкриття та закриття
// const openButtons = document.querySelectorAll('[data-modal-open]');
// const closeButtons = document.querySelectorAll('[data-modal-close]');
// const overlay = document.querySelector('.burger-overlay');

// // Функція для відкриття модального вікна
// function openModal() {
//   overlay.classList.add('is-open');
// }

// // Функція для закриття модального вікна
// function closeModal() {
//   overlay.classList.remove('is-open');
// }

// // Додаємо обробники подій для кожної кнопки
// openButtons.forEach(button => {
//   button.addEventListener('click', openModal);
// });

// closeButtons.forEach(button => {
//   button.addEventListener('click', closeModal);
// });
